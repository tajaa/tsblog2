import React from "react";
import { Prisma } from "@prisma/client";
import Link from "next/link";

type Post = Prisma.PostGetPayload<{
  include: { categories: true };
}>;

export type PostsListProps = {
  posts: Post[];
};

export const PostsList = (props: PostListProps) => {
  return (
    <div>
      {props.posts.map((post: Post) => (
        <div key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};
export default PostsList;
