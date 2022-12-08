import { IoIosNotificationsOutline } from "react-icons/io"
import Search from "./Search"
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { BiLogIn, BiLogOut } from "react-icons/bi"



const Header = () => {
    const { data: session } = useSession()
    console.log(session)
  return (
      //header component
      <nav className="sm:p-[12px] p-2 md:p-4 z-[999]   fixed top-0 w-full  border-b border-gray-800 bg-[#0F172A] bg-opacity-10  backdrop-filter backdrop-blur-lg ">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
              <Link href="/" legacyBehavior>
                  <div className="font-semibold cursor-pointer text-base sm:text-lg md:text-2xl tracking-wide text-white">
                      talk
                      <span className="font-bold text-[#0EA5E9]">Z</span>
                  </div>
              </Link>
         
              {/* responsive search component */}
              <Search />
              <div className="flex items-center gap-1 md:gap-x-2">
                  <IoIosNotificationsOutline className="text-gray-400 lg md:text-2xl" />
                  {/* <p>{session?.user?.name}</p> */}
                  <div className="block md:hidden text-gray-400 cursor-pointer">
                      {session ? <BiLogOut onClick={()=>signOut()} /> : <BiLogIn onClick={()=>signIn()} />}
                  </div>
                  {session ? (
                      <>
                          <Image src={session?.user?.image || "dsds"} alt={session?.user?.name || "profile"} width={"32"} height={"32"} className="rounded-full" objectFit="cover" />
                          <button onClick={() => signOut()} className="text-gray-400 hidden md:flex font-semibold text-xs sm:text-sm bg-[#1E293B] border-t rounded-xl whitespace-nowrap border-gray-700 md:text-base px-2 md:px-4 p-[4px] sm:py-2 shadow-md">
                              Sign Out
                          </button>
                      </>
                   
                  ):(
                      <button onClick={() => signIn()} className="text-gray-400 hidden md:flex font-semibold text-xs sm:text-sm bg-[#1E293B] border-t rounded-xl whitespace-nowrap border-gray-700 md:text-base px-2 md:px-4 p-[4px] sm:py-2 shadow-md">
                          Sign in 
                      </button>
                  )}
                 
              </div>
          </div>
          
        

      </nav>
  );
}

export default Header