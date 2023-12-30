import React from "react";
import prisma from "../prisma";
import PostCard from "./PostCard";

type Props = {};

const Posts = async (props: Props) => {
  const posts = await prisma.post.findMany();
  //console.log(posts);
  //posts in an array 'cause we have find many
  //
  const bgClasses = ["bg-pink-500", "bg-blue-500", "bg-yellow-500"];

  return (
    <div>
      <h2 className="text-4xl text-center mt-6">Trending</h2>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} className={bgClasses[index]} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
