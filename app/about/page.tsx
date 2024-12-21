
import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
//hidden md:block
const page = () => {
  const about_event = `Model United Nations (MUN) conferences are immersive academic simulations where students represent various countries as delegates, tasked with addressing global issues from the perspective of their assigned nation. Throughout the event, participants engage in debates and discussions following real UN protocols, striving to find solutions to complex problems such as climate change, international security, and human rights. These discussions are organized into sessions within various UN committees, culminating in the drafting and voting on resolutions that propose actionable solutions to the issues at hand.

It is monumental and noteworthy that Sree Chitra Thirunal College of Engineering is conducting its first Model United Nations. Being held for the first time ever, this event is aspiring to make a mark in the history of  SCTCE’s MUN chapters. 
With this conference being auspicious as ever, the inaugural edition of SCT Model United Nations conference will be held from 7th to 9th of February 2025
Hundreds of delegates from all over India/Kerala are expected to participate in this propitious event.
`;
  return (
    <section className="padding pt-20">
      <section
        id="page1"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container text-white"
      >
        <div className="flex-1 flex justify-center items-center ">
          <Image
            src={logo}
            alt=""
            loading="lazy"
            width="350"
            height="280"
            decoding="async"
            data-nimg="1"
            className=" object-contain rounded-md"
          />
        </div>
        <div className="flex m-5 flex-1 flex-col">
          <h2 className="font-palanquin text-4xl mb-10 font-bold lg:max-w-lg lg:text-start ">
            About SCTMUN
          </h2>
          <p className="mt-4 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7 text-justify text-[#bbbcbc]">
            {about_event}
          </p>
          <div className="flex-1 flex justify-center items-center ">
            <h2 className="font-palanquin text-4xl mb-10 font-bold bg-gradient-to-r from-[#efb98f] via-[#ef9a06] to-[#f1871d] bg-clip-text text-transparent lg:max-w-lg">
              February 07 | 08 | 09
            </h2>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
