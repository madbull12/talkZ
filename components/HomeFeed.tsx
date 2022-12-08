import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_ALL_POSTS, GET_POST_BY_TOPIC } from "../graphql/queries";
import { IPost } from "../interface";
import Post from "./Post";
import { DotSpinner } from "@uiball/loaders";
import PostsList from "./PostsList";

type Props = {
  topic?: string;
};
const HomeFeed = ({ topic }: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = !topic
    ? useQuery(GET_ALL_POSTS)
    : useQuery(GET_POST_BY_TOPIC, {
        variables: {
          topic: topic,
        },
      });
  console.log(data);
  const [postNum, setPostNum] = useState<number>(5);
  // console.log(data?.getTalkZ_postList || data?.getTalkZ_postListByTopic)
  const posts: IPost[] = !topic
    ? data?.getTalkZ_postList
    : data?.getTalkZ_postListByTopic;
  const showMorePosts = () => {
    setPostNum((prev) => prev + 5);
  };

  const showLessPosts = () => {
    setPostNum(5);
  };

  if (!posts) {
    return (
      <div className="flex items-center justify-center pt-4">
        <DotSpinner size={40} speed={0.9} color="#0EA5E9" />
      </div>
    );
  }

  return (
    <div className=" text-gray-400">
      <div className="space-y-4 mt-4">
        {posts?.slice(0, postNum).map((post: IPost, i: any) => (
          <Post key={i} post={post} />
        ))}
        {posts?.length >= 5 && (
          <p
            onClick={() => {
              postNum >= posts?.length ? showLessPosts() : showMorePosts();
            }}
            className="text-center text-lg font-bold cursor-pointer pb-4"
          >
            {postNum >= posts?.length ? "Show less" : "Show more"}
          </p>
        )}
      </div>
    </div>
  );
};

export default HomeFeed;
