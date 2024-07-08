"use client";
import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import highSnobiety from "../../../public/highsnobiety-logo-vector.svg";
import gq from "../../../public/gq-logo.svg";
import productHunt from "../../../public/product-hunt.svg";
import elle from "../../../public/elle-logo.svg";

const logos = [
  { src: highSnobiety, alt: "High Snobiety Logo" },
  { src: gq, alt: "GQ Logo" },
  { src: productHunt, alt: "Product Hunt Logo" },
  { src: elle, alt: "Elle Logo" },
];

const RenderCarousel = () => {
  return (
    <>
      <Carousel>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center min-w-24 "
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={150}
              className="object-contain" // Ensures image scales appropriately
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default RenderCarousel;
