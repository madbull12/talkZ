import Link from "next/link"
import { useRouter } from "next/router"
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineExplore,MdOutlineQuestionAnswer } from 'react-icons/md'

const Sidebar = () => {
  const router = useRouter()
  return (
    <div className="fixed w-[220px] space-y-3   top-16 left-0  h-screen bg-transparent  px-4 pt-8 z-50 text-gray-400">
      <p className="text-sm font-bold">MENU</p>
      <ul className="space-y-3">
        <li className={` flex items-center gap-x-2 ${router.pathname === "/" ? "text-[#0EA5E9] font-bold" : ""}`}>
          <AiOutlineHome />
          <Link href="/" >Home</Link>
        </li>
        <li className={`flex items-center gap-x-2 ${router.pathname === "/explore" ? "text-[#0EA5E9] font-bold" : ""}`}>
          <MdOutlineExplore />
          <Link href="/explore">Explore Topics</Link>
        </li >
        <li className={`flex items-center gap-x-2 `}>
          <MdOutlineQuestionAnswer />
          <Link href="/">My answers</Link>
        </li >
        
      </ul>
      
    </div>
  )
}

export default Sidebar