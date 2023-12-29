import React from "react";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-12 text-white">
      <div className="col-span-7">
        <h1 className="text-2xl sm:text-4xl"> CS News For Busy Coders</h1>
        <button>Brows Articles</button>
      </div>
      <div className="col-span-5">
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
