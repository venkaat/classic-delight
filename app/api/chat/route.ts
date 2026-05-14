import { NextResponse } from "next/server";
import { model } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { message } = body;

    if (!message) {
      return NextResponse.json(
        { error: "Message required" },
        { status: 400 }
      );
    }

    const result = await model.generateContent(message);

    const response = result.response.text();

    return NextResponse.json({
      success: true,
      response,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "AI generation failed",
      },
      { status: 500 }
    );
  }
}