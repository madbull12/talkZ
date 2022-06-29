import Link from "next/link"
import { useRouter } from "next/router"
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineExplore,MdOutlineQuestionAnswer } from 'react-icons/md'

const Sidebar = () => {
  const router = useRouter()
  return (
    <div className="fixed w-[220px] space-y-3  lg:block  top-16 left-0  h-screen bg-transparent  px-4 pt-8 z-50 text-gray-400">
      <p className="text-sm font-bold">MENU</p>
      <ul className="lg:space-y-3 flex lg:flex-col">
        <li className={` flex items-center gap-x-2 ${router.pathname === "/" ? "text-[#0EA5E9]  font-bold" : ""}`}>
          <AiOutlineHome className="text-3xl lg:text-xl " />
          <Link href="/"  >
            <span className="hidden lg:block">Home</span>
          </Link>
        </li>
        <li className={`flex items-center gap-x-2 ${router.pathname === "/explore" ? "text-[#0EA5E9] font-bold" : ""}`}>
          <MdOutlineExplore  className="text-2xl lg:text-xl " />
          <Link href="/explore">
            <span  className=" hidden lg:block">Explore topics</span>
          </Link>
        </li >
        <li className={`flex items-center gap-x-2 `}>
          <MdOutlineQuestionAnswer className="text-3xl lg:text-xl" />
          <Link href="/" >
            
            <span  className=" hidden lg:block">
              My answers
            </span>
          </Link>
        </li >
        
      </ul>
      
    </div>
  )
}

export default Sidebar