import React from "react";
import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient();

type Props = {};

const Posts = async (props: Props) => {
  const users = await prisma.user.findMany();
  console.log(users);
  const posts = await prisma.post.findMany();
  console.log(posts);

  return <div>Posts</div>;
};

export default Posts;
