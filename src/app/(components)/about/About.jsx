import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <section className="section mb-60 lg:mb-0">
      <div className="container mx-auto h-full relative max-w-full lg:max-w-7xl">
        {/* Titlul "About me" deasupra imaginii și textului */}
        <div className="mt-20 ">
          <h1 className="h1 text-left mb-16">About me</h1>

          <div
            className="flex flex-col lg:flex-row h-full 
            items-start justify-center gap-x-24 lg:text-left mt-0 "
          >
            <div className="rounded-3xl flex-1 order-2 lg:order-none overflow-hidden mb-20 mx-auto">
              <Image
                src="https://res.cloudinary.com/dnbooicju/image/upload/v1725133263/Patrik_x3dg0z.jpg"
                alt="man"
                layout="responsive"
                width={1000}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex-1 pb-14 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
              <p className="mb-8 max-w-sm">
                Pasiunea mea pentru fotografie a început <b>acum 7 ani</b>, când
                mi-am achiziționat primul aparat foto semi-profesionist. De
                atunci, am transformat această pasiune într-o carieră și mă
                concentrez pe capturarea momentelor speciale din cadrul
                evenimentelor sociale, absolvirilor și ședințelor foto.
              </p>
              <p className=" max-w-sm">
                Cred cu tărie că fiecare eveniment este unic, iar misiunea mea
                este să surprind autenticitatea și emoția fiecărei clipe, nu să
                o regizez. Fiecare proiect reprezintă o oportunitate de a aduce
                mai multă valoare și de a îmbunătăți constant calitatea muncii
                mele.
              </p>
            </div>
          </div>

          {/* Cele două paragrafe sub imagine, în coloane */}
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <p className="mb-12 lg:w-1/2">
              Îmi place să interacționez cu oameni noi și să lucrez în situații
              care pot părea stresante. De fapt, mă simt cel mai creativ atunci
              când sunt sub presiune. Am avut ocazia să colaborez cu sute de
              persoane, iar ceea ce îmi doresc cel mai mult este să le ofer
              amintiri autentice.
            </p>

            <p className="mb-12 lg:w-1/2">
              Dacă ești în căutarea unui fotograf care să surprindă momentele
              tale importante cu dedicare și profesionalism, sunt aici să
              relaționăm și să lucrăm împreună!
            </p>
          </div>
          {/* <Link href={"/portfolio"} className="btn">
            View my work →
          </Link> */}
        </div>
      </div>
    </section>
  );
}

export default About;
