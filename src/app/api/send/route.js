import { NextResponse } from "next/server";
import { sendMail } from "../../(components)/contact/mail"; // Asigură-te că calea este corectă

export async function POST(request) {
  try {
    // Obține datele din cererea POST
    const { subject, body } = await request.json();
    console.log("subject", subject);
    console.log("body", body);

    // Trimite emailul folosind funcția sendMail
    await sendMail(subject, body);

    // Returnează un răspuns de succes
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
