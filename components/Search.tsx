import { FiSearch } from 'react-icons/fi'
import { IoIosNotifications } from 'react-icons/io'

const Search = () => {
  return (
    <div className="bg-[#1E293B] rounded-xl text-gray-400 border-t border-gray-700 shadow-md px-2 md:px-4 py-1 md:py-2 font-semibold flex items-center gap-2  md:flex-[0.5] ">
        <FiSearch />
        <input placeholder="Search..." className='bg-transparent outline-none text-xs sm:text-sm md:text-base w-full' />
    </div>
  )
}

export default Search