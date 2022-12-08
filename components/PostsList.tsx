import React,{ useState } from "react";
import { IPost } from "../interface";
import Loader from "./Loader";
import Post from "./Post";

const PostsList = ({ posts }: { posts: IPost[] }) => {
  const [postNum, setPostNum] = useState<number>(5);

    const showMorePosts = () => {
        setPostNum((prev) => prev + 5);
      };
    
      const showLessPosts = () => {
        setPostNum(5);
      };
      if (!posts) {
        return <Loader />
      }
  return (
    <div className="flex flex-col gap-y-4 py-4">
      {posts?.length !== 0 ? (
        <>
          {posts?.slice(0, postNum).map((post: IPost, i: number) => (
            <Post post={post} key={i} />
          ))}
        </>
      ) : (
        <h1 className="text-gray-400 text-lg font-bold md:text-2xl mb-4 text-center ">
          No results
        </h1>
      )}
      <>
      {posts?.length >= 5 && (
          <p
            onClick={() => {
              postNum >= posts?.length ? showLessPosts() : showMorePosts();
            }}
            className="text-center text-lg text-gray-400 font-bold cursor-pointer pb-4"
          >
            {postNum >= posts?.length ? "Show less" : "Show more"}
          </p>
        )}
      </>

      
    </div>
  );
};

export default PostsList;
