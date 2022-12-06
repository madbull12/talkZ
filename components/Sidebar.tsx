import Link from "next/link"
import { useRouter } from "next/router"
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineExplore,MdOutlineQuestionAnswer } from 'react-icons/md'

const Sidebar = () => {
  const router = useRouter()
  return (
    <div className=" lg:fixed w-full  lg:w-[220px] space-y-2 lg:block top-4 md:top-10 lg:top-16 lg:h-screen  px-4  pt-16 z-[100] text-gray-400 bg-transparent">
      <p className="text-sm font-bold hidden lg:block">MENU</p>
      <ul className="lg:space-y-3   flex lg:flex-col w-full justify-center space-x-8 lg:space-x-0">
         
        <Link href="/">
          <span className={` flex items-center cursor-pointer gap-x-2 ${router.pathname === "/" ? "text-[#0EA5E9]  font-bold" : ""}`}>
            <AiOutlineHome className="text-3xl lg:text-xl " />
            <span className="hidden lg:block">Home</span>           
          </span>

        </Link>
    
    
        <Link href="/explore">
          <span className={`flex cursor-pointer items-center gap-x-2 ${router.pathname === "/explore" ? "text-[#0EA5E9] font-bold" : ""}`}>
            <MdOutlineExplore  className="text-2xl lg:text-xl " />
            <span  className=" hidden lg:block">Explore topics</span>

          </span>

        </Link>
  

        <Link href="/">
          <span className={`flex items-center gap-x-2 cursor-pointer`}>
              <MdOutlineQuestionAnswer className="text-3xl lg:text-xl" />
              
              <span  className=" hidden lg:block">
                My answers
              </span>
          </span>
        </Link>
      
  
        
      </ul>
      
    </div>
  )
}

export default Sidebar