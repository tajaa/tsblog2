import React from "react";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="grid grid-cols-1 text-white">
      <h1 className="text-2xl sm:text-4xl"> CS News For Busy Coders</h1>
      <button>Brows Articles</button>
      <Image src="/coffee.png" width={300} height={300} alt="person-walking" />
    </section>
  );
};

export default HeroSection;
