import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File;
    const prompt = formData.get("prompt") as string;

    if (!image || !prompt) {
      return NextResponse.json(
        { error: "Missing image or prompt" },
        { status: 400 }
      );
    }

    // 1. Read the uploaded image file as an ArrayBuffer and convert to base64
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = buffer.toString("base64");

    // 2. Perform multimodal prompt enhancement using Gemini (works perfectly on free tier!)
    let enhancedPrompt = prompt;
    if (process.env.GEMINI_API_KEY) {
      try {
        console.log("Analyzing image with Gemini 1.5 Flash...");
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        // gemini-1.5-flash is stable and always available on the free tier
        const geminiModel = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
        });

        const geminiPrompt = `Analyze this living room/window photo. Write a highly detailed, professional architectural photography prompt for generating an image of the EXACT SAME room, but featuring beautiful, premium, custom curtains/blinds installed on the windows matching the following specifications: "${prompt}". Describe the room's composition, layout, furniture, lighting, wall colors, and structure in meticulous detail, and detail how the new custom curtains/blinds are perfectly integrated, so a text-to-image AI can generate a photorealistic visualization of the styled room. Return ONLY the detailed prompt, no introduction or metadata.`;

        const geminiResult = await geminiModel.generateContent([
          {
            inlineData: {
              data: base64Image,
              mimeType: image.type || "image/png"
            }
          },
          geminiPrompt
        ]);

        enhancedPrompt = geminiResult.response.text();
        console.log("Enhanced prompt from Gemini:", enhancedPrompt);
      } catch (e: any) {
        console.warn("Gemini prompt enhancement failed, using raw prompt instead:", e.message || e);
      }
    }

    // 3. Attempt Gemini Imagen 3 Generation (First Priority - Paid Tier only)
    let imageBase64 = "";
    if (process.env.GEMINI_API_KEY) {
      const imagenModels = ["imagen-3.0-generate-002", "imagen-3.0-generate-001"];
      for (const modelName of imagenModels) {
        try {
          console.log(`Attempting Gemini Imagen model: ${modelName}`);
          const imgResponse = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:predict?key=${process.env.GEMINI_API_KEY}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                instances: [{
                  prompt: `${enhancedPrompt}. Professional masterwork interior design showcase, architectural photography, realistic fabric textures, cozy elegant lighting, photorealistic.`,
                }],
                parameters: {
                  sampleCount: 1,
                  aspectRatio: "1:1",
                  outputMimeType: "image/png",
                },
              }),
            }
          );

          if (imgResponse.ok) {
            const resJson = await imgResponse.json();
            const prediction = resJson.predictions?.[0];
            if (prediction) {
              imageBase64 = prediction.bytesBase64Encoded || prediction.image?.imageBytes;
            } else if (resJson.generatedImages?.[0]) {
              imageBase64 = resJson.generatedImages[0].image?.imageBytes;
            }
            if (imageBase64) {
              console.log(`Successfully generated image using Gemini Imagen: ${modelName}`);
              const imgBuffer = Buffer.from(imageBase64, "base64");
              return new Response(imgBuffer, { headers: { "Content-Type": "image/png" } });
            }
          }
        } catch (err) {
          console.warn(`Gemini Imagen ${modelName} failed:`, err);
        }
      }
    }

    // 4. Attempt Hugging Face Generation (Second Priority)
    if (process.env.HUGGINGFACE_API_KEY) {
      try {
        console.log("Attempting Hugging Face SDXL Refiner...");
        const hfImageURI = `data:${image.type || "image/png"};base64,${base64Image}`;
        const hfResponse = await fetch(
          "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-refiner-1.0",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
              Accept: "image/png",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              inputs: hfImageURI,
              parameters: {
                prompt: `Modern luxury interior design. ${prompt}. Elegant custom curtains, realistic indoor styling, premium home decor, warm cinematic lighting, architectural photography, professional window dressing, clean details`,
                num_inference_steps: 30,
                strength: 0.55,
              },
              options: { wait_for_model: true },
            }),
          }
        );

        if (hfResponse.ok) {
          console.log("Successfully generated image using Hugging Face!");
          const result = await hfResponse.arrayBuffer();
          return new Response(result, { headers: { "Content-Type": "image/png" } });
        }
      } catch (err) {
        console.warn("Hugging Face attempt failed:", err);
      }
    }

    // 5. High-Performance Silent Fallback (Third Priority - Pollinations AI / Flux)
    // Completely free, no key required, highly reliable, bypassing any regional DNS block!
    try {
      console.log("Activating High-Performance Pollinations AI Fallback Engine...");
      const finalPrompt = `${enhancedPrompt}. Professional masterwork interior design showcase, architectural photography, realistic fabric textures and details, cozy elegant lighting, ultra-realistic.`;
      
      const seed = Math.floor(Math.random() * 1000000);
      const pollinationsUrl = `https://image.pollinations.ai/p/${encodeURIComponent(finalPrompt)}?width=1024&height=1024&nologo=true&seed=${seed}`;
      
      console.log("Fetching from Pollinations URL:", pollinationsUrl);
      const polResponse = await fetch(pollinationsUrl);
      if (polResponse.ok) {
        console.log("Successfully generated image using Pollinations AI Fallback!");
        const bufferResult = await polResponse.arrayBuffer();
        return new Response(bufferResult, {
          headers: {
            "Content-Type": "image/png",
            "Cache-Control": "public, max-age=31536000, immutable"
          },
        });
      } else {
        throw new Error(`Pollinations HTTP error status: ${polResponse.status}`);
      }
    } catch (err: any) {
      console.error("Pollinations Fallback failed:", err);
      throw new Error(`All generation engines failed. Pollinations error: ${err.message || err}`);
    }

  } catch (error: any) {
    console.error("SERVER ERROR:", error);
    if (error.cause) {
      console.error("SERVER ERROR CAUSE:", error.cause);
    }
    const causeMsg = error.cause ? `: ${error.cause.message || String(error.cause)}` : "";
    return NextResponse.json(
      { error: `${error.message}${causeMsg}` || "Internal server error" },
      { status: 500 }
    );
  }
}