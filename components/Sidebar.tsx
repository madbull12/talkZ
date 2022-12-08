import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore, MdOutlineQuestionAnswer } from "react-icons/md";

const Sidebar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div className=" lg:fixed w-full lg:pt-14  lg:w-[220px] space-y-2 lg:block top-4 md:top-10 lg:top-16 lg:h-screen  px-4 pt-16  md:pt-20 z-[100] text-gray-400 bg-transparent">
      <p className="text-sm font-bold hidden lg:block">MENU</p>
      <ul className="lg:space-y-3   flex lg:flex-col w-full justify-center space-x-8 lg:space-x-0">
        <Link href="/">
          <span
            className={` flex items-center cursor-pointer gap-x-2 ${
              router.pathname === "/" ? "text-[#0EA5E9]  font-bold" : ""
            }`}
          >
            <AiOutlineHome className="text-2xl  min-w-[280px]:text-3xl lg:text-xl " />
            <span className="hidden lg:block">Home</span>
          </span>
        </Link>

        <Link href="/explore">
          <span
            className={`flex cursor-pointer items-center gap-x-2 ${
              router.pathname === "/explore" ? "text-[#0EA5E9] font-bold" : ""
            }`}
          >
            <MdOutlineExplore className="text-2xl  min-w-[280px]:text-3xl lg:text-xl " />
            <span className=" hidden lg:block">Explore topics</span>
          </span>
        </Link>

        {session ? (
          <Link href={`/user/posts`}>
            <span className={`flex items-center gap-x-2 cursor-pointer`}>
              <MdOutlineQuestionAnswer className="text-2xl  min-w-[280px]:text-3xl lg:text-xl" />

              <span className=" hidden lg:block">Your Posts</span>
            </span>
          </Link>
        ) : null}
      </ul>
    </div>
  );
};

export default Sidebar;
