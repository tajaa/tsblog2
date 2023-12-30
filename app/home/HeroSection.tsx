import React from "react";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-12 text-white mt-6">
      <div className="col-span-7">
        <h1 className="text-2xl sm:text-4xl md:text-5xl md:leading-normal">
          CS News For Busy Coders
        </h1>
        <button className="bg-indigo-500 px-6 py-1 mt-3 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]">
          Brows Articles
        </button>
      </div>
      <div className="col-span-5 place-self-center">
        <Image
          src="/coffee.png"
          width={300}
          height={300}
          alt="person-walking"
        />
      </div>
    </section>
  );
};

export default HeroSection;
