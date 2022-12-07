import { FiSearch } from 'react-icons/fi'
import { IoIosNotifications } from 'react-icons/io'
import { useState } from 'react'
import { useRouter } from 'next/router';

const Search = () => {

  const [term,setTerm] = useState<string>("");
  const router =useRouter()

  const submitSearch = (e:React.SyntheticEvent) => {
      e.preventDefault();
      router.push(`/explore?q=${term}`);
  }

  return (
    <form onSubmit={submitSearch} className="bg-[#1E293B] rounded-xl text-gray-400 border-t border-gray-700 shadow-md px-2 md:px-4 py-1 md:py-2 font-semibold flex items-center gap-2  md:flex-[0.5] ">
        <FiSearch />
        <input onChange={(e)=>setTerm(e.target.value)} placeholder="Search..." className='bg-transparent outline-none text-xs sm:text-sm md:text-base w-full' />
    </form>
  )
}

export default Search