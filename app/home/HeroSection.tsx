import React from "react";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="border-b-4 p-1 mt-2 mb-3 rounded-lg bg-teal-700">
      <section className="grid container grid-cols-1 sm:grid-cols-12 text-white mt-6">
        <div className="col-span-7">
          <h1 className="text-2xl font-mono sm:text-4xl md:text-5xl md:leading-normal">
            Remote Work Solutions
          </h1>
          <h2 className="text-2xl font-mono mb-2 text-black">
            Connecting home-offices around the world
          </h2>
          <ul className="font-mono text-white">
            <li className="mr-2">
              <span>Industry News</span>
            </li>

            <li>
              <span className="mr-2">Remote Work Solutions</span>
            </li>
            <li>
              <span className="mr-2">Business Psychology</span>
            </li>
          </ul>
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
    </div>
  );
};

export default HeroSection;
