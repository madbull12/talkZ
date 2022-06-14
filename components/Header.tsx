import { IoIosNotificationsOutline } from "react-icons/io"
import Search from "./Search"
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"

interface ISession {
    name:string;
    image:string;
    email:string;
}


const Header = () => {
    const { data: session } = useSession()
    console.log(session)
  return (
    //header component
    <nav className="sm:p-[12px] p-2 md:p-4  border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="font-semibold cursor-pointer text-base sm:text-lg md:text-2xl tracking-wide text-white">
                talk
                <span className="font-bold text-[#0EA5E9]">Z</span>
            </div>
            {/* responsive search component */}
            <Search />
            <div className="flex items-center md:gap-x-2">
                <IoIosNotificationsOutline className="text-gray-400 lg md:text-2xl" />
                {/* <p>{session?.user?.name}</p> */}
                {session ? (
                    <>
                        <Image  src={session?.user?.image} alt={session?.user?.name} width={35} height={35} className="w-10 h-10 rounded-full" objectFit="cover" />
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
  )
}

export default Header