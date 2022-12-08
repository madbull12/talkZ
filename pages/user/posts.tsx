import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { IPost } from "../../interface";

const UserPostsPage = () => {
  const session = useSession();
  const router= useRouter()

  return <div></div>;
};

export default UserPostsPage;
