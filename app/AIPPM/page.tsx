"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import traverse from "/assets/image.png";

interface InteractiveImageProps {
  src: StaticImageData; // Image source
  text: string; // Paragraph text
  label: string; // Label below the image
}

const InteractiveImage = ({ src, text, label }: InteractiveImageProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative mx-auto flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Wrapper for Image and Text */}
      <div className="relative flex items-center justify-center w-full">
        {/* Paragraph Box */}
        <div
          className={`absolute z-10 bg-[#d6c451] rounded-lg flex items-center justify-center transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          } w-[95%] max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] h-[180px] md:h-[220px] lg:h-[250px]`}
        >
          <p className="text-black text-center text-base md:text-lg lg:text-xl px-6">
            {text}
          </p>
        </div>

        {/* Circular Image and Sliding Label */}
        <div
          className={`relative flex flex-col items-center transition-transform duration-500 ${
            hovered
              ? "translate-x-[200px] md:translate-x-[350px] lg:translate-x-[400px]"
              : "translate-x-0"
          }`}
        >
          {/* Circular Image */}
          <div className="relative rounded-full overflow-hidden w-[220px] h-[220px] md:w-[270px] md:h-[270px] lg:w-[320px] lg:h-[320px]">
            <Image
              src={src}
              alt={label}
              fill
              className="object-cover rounded-full"
            />
          </div>

          {/* Label Below Image */}
          <div className="mt-4 w-auto max-w-[300px]">
            <div className="bg-black text-[#ffffa5] text-center font-medium px-6 py-2 rounded-lg shadow-md text-base md:text-lg lg:text-xl">
              {label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function InteractiveSection() {
  return (
    <section className="bg-transparent pt-20 pb-30 relative min-h-screen overflow-hidden">
      {/* Title and Subtitle */}
      <div className="text-center mb-10 mt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-[#d6c451]">
          AIPPM Agenda
        </h1>
        <h3 className="text-lg md:text-xl text-gray-300 mt-6">
          Defensive Security Concepts and Policies
        </h3>
        <h1 className="text-4xl mt-32 md:text-5xl font-bold text-[#d6c451]">
          AIPPM EXECUTIVE BOARD
        </h1>
      </div>

      {/* Interactive Images */}
      <div className="flex flex-col items-center justify-center gap-20 px-4">
        <InteractiveImage
          src={traverse}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          label="Bob"
        />
        <InteractiveImage
          src={traverse}
          text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          label="John"
        />
        <InteractiveImage
          src={traverse}
          text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          label="John"
        />
      </div>
    </section>
  );
}
