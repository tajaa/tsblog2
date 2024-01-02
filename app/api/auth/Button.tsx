"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

export const Button = (props: Props) => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (session) {
    return (
      <button
        className="p-4 cursor"
        onClick={(e) => {
          e.preventDefault();
          signOut();
        }}
      >
        Sign Out
      </button>
    );
  }

  return (
    <div onClick={() => signIn()} className="p-4">
      Sign INN
    </div>
  );
};
