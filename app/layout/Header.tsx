"use client";
import React from "react";
import Link from "next/link";
import { Button as AuthButton } from "../auth/Button";
import { SessionProvider } from "next-auth/react";

type Props = {};

const Header = (props: Props) => {
  return (
    <SessionProvider>
      <div className="border-b border-white bg-black text-white flex justify-between">
        <Link href="/" className="text-4xl px-2 py-4 font-mono ml-2">
          CMPRSN
        </Link>
        <AuthButton />
      </div>
    </SessionProvider>
  );
};
export default Header;
