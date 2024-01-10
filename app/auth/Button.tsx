"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

type Props = {};

export const Button = (props: Props) => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (session) {
    return (
      <div className="flex items-stretch">
        <Link
          href="/blog/new"
          className="mr-6 hover:underline self-center font-mono mt-5"
        >
          Write{" "}
        </Link>
        <button
          className="p-4 bg-white text-black font-mono"
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return <div onClick={() => signIn()}>Sign In!</div>;
};
