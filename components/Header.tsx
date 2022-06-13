import { IoIosNotificationsOutline } from "react-icons/io"
import Search from "./Search"

const Header = () => {
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
                <button className="text-gray-400 hidden md:flex font-semibold text-xs sm:text-sm bg-[#1E293B] border-t rounded-xl whitespace-nowrap border-gray-700 md:text-base px-2 md:px-4 p-[4px] sm:py-2 shadow-md">
                Sign in 
            </button>
            </div>
        </div>
        
      

    </nav>
  )
}

export default Header