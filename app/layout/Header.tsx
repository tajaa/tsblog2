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
        <Link href="/blog/new" className="px-2 mt-9 font-mono text-teal-300">
          Write A Post{" "}
        </Link>
        <Link href="/blog/all" className="px-2 mt-9 font-mono text-teal-300">
          Posts
        </Link>
        <AuthButton />
      </div>
    </SessionProvider>
  );
};
export default Header;
