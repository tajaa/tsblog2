"use client";
import React, { useState } from "react";

type Props = {};

const NewsLetterSub = (props: Props) => {
  const [subscribed, setSubscribed] = useState<boolean>(false);

  async function create(formData: formData) {
    const email = formData.get("email");
    await fetch("/api/beehiv", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status == 200) {
          setSubscribed(true);
        }
      })
      .catch((err) => console.log(err));
  }

  if (subscribed)
    return (
      <div>
        <h2>Thanks for subscribing</h2>
      </div>
    );

  return (
    <form action={create}>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter your email"
          className="border-2 rounded-full rounded-r-none py-3 px-4 bg-slate-100 mt-3 flex-1 outline-none focus:bg-teal-500 focus:placeholder-slate-900"
        />
        <button className="ml-2 border-2 rounded-full rounded-l-none py-3 px-4 bg-teal-800 hover:bg-amber-500">
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default NewsLetterSub;
