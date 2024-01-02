import React from "react";
import { prisma } from "@/lib/prisma";

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      author: true,
    },
  });
  console.log(post);

  return (
    <div className="container mt-6">
      {post && (
        <>
          <h1 className="text-4xl font-mono mb-5">{post.title}</h1>
          <div className="flex items-center">
            <p className="text-sm font-mono text-amber-500">
              By {post.author.name}
            </p>
            <div
              className="w-20 h-20 rounded-full bg-contain m-2"
              style={{ backgroundImage: `url(${post.author.image})` }}
            ></div>
          </div>
          <p className="font-mono text-black">{post.content}</p>
        </>
      )}
    </div>
  );
};

export default page;
