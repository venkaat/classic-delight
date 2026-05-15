"use client";

import { useState } from "react";

declare global {
  interface Window {
    puter: any;
  }
}

export default function VisualizerPage() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [uploadedImage, setUploadedImage] =
  useState<string>("");

const [uploadedFile, setUploadedFile] =
  useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!uploadedFile || !prompt) {
    alert("Upload a room image first");
    return;
  }

  setLoading(true);

  try {

    const formData =
      new FormData();

    formData.append(
      "image",
      uploadedFile
    );

    formData.append(
      "prompt",
      `
      Luxury interior design.

      ${prompt}

      realistic curtains,
      premium home decor,
      warm lighting,
      architectural digest style,
      realistic photography
      `
    );

    const response =
      await fetch(
        "/api/img2img",
        {
          method: "POST",
          body: formData,
        }
      );

    if (!response.ok) {

      throw new Error(
        "Generation failed"
      );

    }

    const blob =
      await response.blob();

    const imageUrl =
      URL.createObjectURL(blob);

    setImage(imageUrl);

  } catch (error) {

    console.error(
      "Image generation failed:",
      error
    );

  } finally {

    setLoading(false);

  }

};
  

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          AI Curtain Visualizer
        </h1>
        <p className="text-gray-600 mb-8">
  Upload your room and visualize curtains,
  blinds, and luxury interiors with AI.
</p>
<input
  type="file"
  accept="image/*"
  className="mb-4"
  onChange={(e) => {

    const file =
    e.target.files?.[0];

  if (!file) return;

  const imageUrl =
    URL.createObjectURL(file);

  setUploadedImage(imageUrl);

  setUploadedFile(file);
  }}
/>

{uploadedImage && (
  <img
    src={uploadedImage}
    alt="Uploaded Room"
    className="mb-6 rounded-2xl max-w-full"
  />
)}
        <textarea
          value={prompt}
          onChange={(e) =>
            setPrompt(e.target.value)
          }
          placeholder="Example: Luxury modern living room with elegant beige curtains..."
          className="w-full border rounded-xl p-4 h-32"
        />
        <div className="flex gap-3 mt-4 flex-wrap">

  {[
     "Luxury beige curtains",
  "Modern blackout curtains",
  "Minimal Scandinavian blinds",
  "Elegant white sheer curtains",
  "Premium wooden blinds"
  ].map((item) => (

    <button
      key={item}
      onClick={() => setPrompt(item)}
      className="px-4 py-2 bg-white border rounded-xl"
    >
      {item}
    </button>

  ))}

</div>

        <button
  onClick={generateImage}
  disabled={loading}
  className="mt-4 bg-gradient-to-r from-black to-gray-700 text-white px-6 py-3 rounded-xl disabled:opacity-50"
>
          {loading
            ? "Generating..."
            : "Generate Design"}
        </button>
        <button
  onClick={() => {
    console.log(window.puter);
    console.log(window.puter.ai);
  }}
  className="
    mt-4
    ml-4
    bg-red-500
    text-white
    px-6
    py-3
    rounded-xl
  "
>
  Debug Puter
</button>
        {loading && (

  <div className="mt-6 p-6 bg-white rounded-2xl shadow">

    <p className="text-lg font-semibold">
      AI is redesigning your room...
    </p>

    <p className="text-gray-500 mt-2">
      This may take 10–30 seconds
    </p>

  </div>

)}
{!image && !loading && (

  <div className="mt-10 bg-white rounded-2xl p-10 text-center">

    <p className="text-gray-500">
      Upload a room and generate your first AI design
    </p>

  </div>

)}

        <div className="grid md:grid-cols-2 gap-6 mt-10">

  

  {image && (
    <div>
      <h2 className="text-xl font-bold mb-2">
        AI Inspiration
      </h2>
<a
  href={image}
  download="classic-delight-design.png"
  className="inline-block mt-4 px-4 py-2 bg-black text-white rounded-xl"
>
  Download Design
</a>
      <img
        src={image}
        alt="Generated Design"
        className="rounded-2xl w-full"
      />
    </div>
  )}

</div>

      </div>
    </div>
  );
}