"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { createPost } from "@/app/actions/publishedPost";

type Props = {};

const NewBlogForm = (props: Props) => {
  const { data: session } = useSession();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!session) return <div>You must be signed into post</div>;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = session?.user?.id;

    if (!userId) return;
    try {
      const post = await createPost({ title, content, authorId: userId });
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (submitted) return <div>Post Submitted!</div>;

  return (
    <div className="min-h[calc(100vh-130px)] py-2 container flex flex-col mt-12">
      <form
        className="flex flex-col items-stretch justify-center h-full text-left"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          placeholder="Title"
          className="text-6xl focus-visible:outline-none bg-teal-600 text-white font-mono"
        />
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="flex-1 text-xl mt-2 bg-black text-white px-1 py-1 rounded-md font-mono"
          placeholder="ideas here..."
        />
        <button
          type="submit"
          className="w-fit-content bg-teal-300 text-black font-mono py-1 px-4 border-2 rounded mt-2 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default NewBlogForm;
