import { getProviders, signIn } from "next-auth/react";
import React, { useState } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

const SignInPage = () => {
  return (
    <div className="flex justify-center flex-col gap-y-2 min-h-screen items-center">
      <button
        onClick={() => signIn("google")}
        className="text-gray-400 items-center gap-x-2 flex  font-semibold text-xs sm:text-sm bg-[#1E293B] border-t rounded-xl whitespace-nowrap border-gray-700 md:text-base px-2 md:px-4 p-[4px] sm:py-2 shadow-md"
      >
        <BsGoogle />
        <span>Sign in with Google</span>
        
      </button>
      <button
        onClick={() => signIn("github")}
        className="text-gray-400 items-center gap-x-2 flex   font-semibold text-xs sm:text-sm bg-[#1E293B] border-t rounded-xl whitespace-nowrap border-gray-700 md:text-base px-2 md:px-4 p-[4px] sm:py-2 shadow-md"
      >
         <BsGithub />
        <span>Sign in with Github</span>
      </button>
    </div>
  );
};

export default SignInPage;
