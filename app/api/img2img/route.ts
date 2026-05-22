import { NextResponse } from "next/server";

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

    console.log(
      "HF KEY Status:",
      process.env.HUGGINGFACE_API_KEY ? "Loaded" : "Missing"
    );

    // 1. Read the uploaded image file as an ArrayBuffer and convert it to a Base64 Data URI
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = `data:${image.type || "image/png"};base64,${buffer.toString("base64")}`;

    // 2. Make a proper Image-to-Image request to Hugging Face
    const response = await fetch(
      "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          Accept: "image/png",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: base64Image,
          parameters: {
            prompt: `Luxury modern interior design. ${prompt}. Elegant custom curtains, realistic interior, premium home decor, warm cinematic lighting, architectural photography, luxury window styling`,
            num_inference_steps: 30,
            strength: 0.6, // Determines how closely the output resembles the input image (0.0 to 1.0)
          },
          options: {
            wait_for_model: true,
          },
        }),
      }
    );

   if (!response.ok) {
  const errorData = await response.text();
  console.error("HuggingFace error:", response.status, errorData);
  return NextResponse.json(
    { error: `HuggingFace error: ${response.status} - ${errorData}` },
    { status: 500 }
  );
}
console.log(
  "CONTENT TYPE:",
  response.headers.get(
    "content-type"
  )
);

   const result =
  await response.arrayBuffer();

return new Response(result, {

  headers: {
    "Content-Type":
      "image/png",
  },

});

  } catch (error) {

    console.error(
      "SERVER ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Server error"
      },
      {
        status: 500
      }
    );

  }

}