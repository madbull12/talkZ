import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import PostsList from "../../components/PostsList";
import UserProfile from "../../components/UserProfile";
import { GET_USER_BY_EMAIL, GET_USER_POSTS } from "../../graphql/queries";
import { IPost } from "../../interface";

const UserPostsPage = () => {
  const session = useSession();
  const router = useRouter();

  const { data: user } = useQuery(GET_USER_BY_EMAIL, {
    variables: {
      email: session?.data?.user?.email,
    },
  });
  const { data: userPosts } = useQuery(GET_USER_POSTS, {
    variables: {
      id: user?.getTalkz_userByEmail?.id,
    },
  });
  console.log(userPosts);

  return (
        <div className="relative max-w-[642px] mx-auto px-4 lg:px-0 pt-4 lg:pt-24">
            <UserProfile />
            <PostsList posts={userPosts?.getTalkZ_postListByUserId} />
        </div>
   
  );
};

export default UserPostsPage;
