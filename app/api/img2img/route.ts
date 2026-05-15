import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const formData =
      await req.formData();

    const image =
      formData.get("image") as File;

    const prompt =
      formData.get("prompt") as string;

    if (!image || !prompt) {

      return NextResponse.json(
        {
          error:
            "Missing image or prompt"
        },
        {
          status: 400
        }
      );

    }

    console.log(
      "HF KEY:",
      process.env.HUGGINGFACE_API_KEY
    );



    const response = await fetch(
  "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
  {
    method: "POST",

    headers: {
      Authorization:
        `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
      Accept: "image/png",
      "Content-Type":
        "application/json",
    },

    body: JSON.stringify({

      inputs: `
      Luxury modern interior design.

      ${prompt}

      Elegant curtains,
      realistic living room,
      premium home decor,
      warm cinematic lighting,
      ultra realistic,
      architectural photography,
      luxury beige curtain styling
      `,

      parameters: {
        num_inference_steps: 30,
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