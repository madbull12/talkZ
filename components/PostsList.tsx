import React from "react";
import { IPost } from "../interface";
import Post from "./Post";

const PostsList = ({ posts }: { posts: IPost[] }) => {
  return (
    <div className="flex flex-col gap-y-4">
      {posts?.length !== 0 ? (
        <>
          {posts?.map((post: IPost, i: number) => (
            <Post post={post} key={i} />
          ))}
        </>
      ) : (
        <h1 className="text-gray-400 text-lg font-bold md:text-2xl mb-4 text-center ">
          No results
        </h1>
      )}
    </div>
  );
};

export default PostsList;
