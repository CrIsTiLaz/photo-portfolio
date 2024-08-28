"use client";

import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne comportamentul implicit de trimitere a formularului

    // Verifică dacă toate câmpurile sunt completate
    if (!email || !subject || !message) {
      Swal.fire({
        icon: "warning",
        title: "Toate câmpurile sunt obligatorii",
        text: "Vă rugăm să completați toate câmpurile înainte de a trimite.",
      });
      return; // Oprește trimiterea formularului
    }

    const formData = {
      to: "cristilazea18@gmail.com",
      subject: subject,
      body: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #4CAF50;">Ați primit un email nou</h2>
          <p><strong>De la:</strong> ${email}</p>
          <p><strong>Subiect:</strong> ${subject}</p>
          <div style="margin-top: 20px;">
            <h3>Mesaj:</h3>
            <p>${message}</p>
          </div>
        </div>
      `,
    };

    try {
      // Trimite cererea POST către API-ul de contact
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Mesaj trimis!",
          text: "Mesajul a fost trimis cu succes.",
        });
        router.push("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Eroare",
          text: "A apărut o eroare la trimiterea mesajului.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Eroare",
        text: "A apărut o eroare la trimiterea mesajului.",
      });
    }
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md pt-[150px] pb-20">
        <h2 className="heading text-center pb-10">Rezervă o sesiune foto!</h2>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 mb-10 text-center">
          <div className="flex flex-col items-center">
            <AiOutlineMail size={40} className="mb-2 primary" />
            <p className="text-lg">patrikstoian7@gmail.com</p>
          </div>

          <div className="flex flex-col items-center">
            <AiFillPhone size={40} className="mb-2 primary" />
            <p className="text-lg">+40 067 157 646</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">
              Email-ul dvs.
            </label>
            <input
              type="email"
              id="email"
              placeholder="exemplu@gmail.com"
              className="form__input mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="subject" className="form__label">
              Subiect
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Spuneți-ne cum vă putem ajuta"
              className="form__input mt-1"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">
              Mesajul dvs.
            </label>
            <textarea
              rows="6"
              id="message"
              placeholder="Lăsați un comentariu.."
              className="form__input mt-1"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button type="submit" className="btn sm:w-fit">
            Trimite
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
