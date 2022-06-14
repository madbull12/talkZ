import { useSession } from "next-auth/react"
import Image from "next/image"
import { useState } from "react";

const CreatePost = () => {
    const { data:session } = useSession();

    const [title,setTitle] = useState<string>("")
  return (
    <section className=" max-w-3xl mx-auto  min-h-screen relative">
        <div className="bg-[#1E293B]  sticky z-50  top-20 rounded-xl mt-4 text-gray-400 border-t border-gray-700 shadow-md px-2 md:px-4 py-1 md:py-2 font-semibold flex items-center gap-2">
            {session && (
                <Image width={35} height={35} src={session?.user?.image} alt={session?.user?.name} objectFit="cover" className="rounded-full" />
            )}
            <input disabled={!session} onChange={(e)=>setTitle(e.target.value)} value={title} className="bg-transparent text-gray-400 w-full outline-none" placeholder={session ? "Create a post by typing a title" : "Please login first"} />
        </div>
        {title && (
            <div className="">bgst</div>
        )}
    </section>

  )
}

export default CreatePost