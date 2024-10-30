import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { LayoutGridDemo } from "@/components/LayoutGridDemo";
import { ImageGridViewer } from "@/components/image-grid-viewer";

function Page() {
  return (
    <section className="section mb-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>

        {/* Display Image Grid Viewer */}
        <ImageGridViewer />

        {/* Display the LayoutGridDemo Component */}
      </div>
    </section>
  );
}

export default Page;
