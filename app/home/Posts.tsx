import React from "react";
import prisma from "../prisma";
import PostCard from "./PostCard";

type Props = {};

const Posts = async (props: Props) => {
  const users = await prisma.user.findMany();
  //console.log(users);
  const posts = await prisma.post.findMany();
  //console.log(posts);

  return (
    <div>
      <h2 className="text-4xl text-center mt-6">Trending</h2>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
