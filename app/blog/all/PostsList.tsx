import React from "react";
import { Prisma } from "@prisma/client";
import Link from "next/link";

type Post = Prisma.PostGetPayload<{
  include: { categories: true };
}>;

export type PostListProps = {
  posts: Post[];
};

export const PostsList = (props: PostListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-4">
      {props.posts.map((post: Post) => (
        <div
          key={post.id}
          className="w-full sm:w-40 md:w-60 lg:w-80 h-full text-black"
        >
          <Link
            href={`/blog/${post.id}`}
            className="p-0.5 font-mono block bg-white cursor-pointer border-2 rounded-md neo-shadow focus:shadow-none focus:translate-x-1 focus:translate-y-1 transform transition-shadow duration-100"
          >
            <article className="w-full h-full">
              <figure className="w-full h-20 md:h-30 h-72 border-b-2">
                {post.imgURL ? (
                  <img src={post.imgURL} />
                ) : (
                  <img src={post.imgURL} alt="thumbnail" />
                )}
              </figure>
            </article>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
};
export default PostsList;
