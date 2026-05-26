import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    console.log(`Sending inquiry from ${name} (${email}) to sam@classicdelight.in and vvvvkt@gmail.com...`);

    // We send an AJAX POST to FormSubmit.co proxying the request server-side.
    // This allows complete client-side security, zero exposed emails in the client bundle,
    // and beautiful custom inline responses instead of FormSubmit's default redirection.
    const response = await fetch("https://formsubmit.co/ajax/sam@classicdelight.in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "Not provided",
        message,
        _subject: `New Classic Delight Inquiry from ${name}`,
        _cc: "vvvvkt@gmail.com",
        _template: "table",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("FormSubmit response failed:", data);
      return NextResponse.json(
        { error: data.message || "Failed to submit inquiry to mailing service." },
        { status: response.status }
      );
    }

    console.log("Inquiry successfully processed by FormSubmit:", data);
    return NextResponse.json({ success: true, message: "Inquiry sent successfully!" });
  } catch (error: any) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
