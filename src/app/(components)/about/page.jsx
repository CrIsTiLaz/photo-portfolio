import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div
          className=" flex flex-col lg:flex-row h-full 
        items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16"
        >
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <Image src="/man.png" alt="man" width={1000} height={1000} />
          </div>
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <b>Doloribus, recusandae reiciendis, </b>
              mollitia ratione voluptatem placeat sint adipisci beatae rerum
              vero sed
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              delectus ipsum pariatur fuga qui libero eligendi architecto quas
              aliquam omnis?
            </p>

            <Link href={"/portfolio"} className="btn">
              View my work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
