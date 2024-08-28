import nodemailer from "nodemailer";

export async function sendMail(subject, htmlBody) {
  const pass = process.env.SEND_API_KEY;
  const email = process.env.SEND_EMAIL;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: pass,
    },
  });

  // Verificare conexiune
  try {
    const testResult = await transport.verify();
    console.log("SMTP server is ready to take messages:", testResult);
  } catch (error) {
    console.error("SMTP verification failed:", error);
    return;
  }

  // Trimitere email
  try {
    const sendResult = await transport.sendMail({
      from: email,
      to: email, // Poți înlocui cu altă adresă dacă e necesar
      subject: subject, // Subiectul emailului
      html: htmlBody, // Corpul emailului ca HTML
    });
    console.log("Email sent successfully:", sendResult);
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}
//TO DO
//sa schimb emailul la care vine contactul cu cel a lui patrik
