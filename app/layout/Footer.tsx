import React from "react";
import githubIcon from "../../public/github-icon.svg";
import twitterIcon from "../../public/twitter-icon.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="flex container justify-between">
        <div className="flex flex-row items-center">
          <div>
            <div className="text-2xl mb-3 font-mono">ReNode Blog</div>
            <div className="text-sm font-mono">© 2023 Remote Node</div>
          </div>
        </div>
        <div className="flex">
          <Link href="https://github.com" target="_blank" className="mr-3">
            <Image src={githubIcon} alt="github" width={32} height={32} />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Image src={twitterIcon} alt="twitter" width={32} height={32} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
