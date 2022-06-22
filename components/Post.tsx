import { BsArrowDownShort, BsArrowUpShort, } from "react-icons/bs"
import { IPost } from "../interface"
import TimeAgo from 'timeago-react'
import { BiCommentDetail } from 'react-icons/bi'
import { useState } from "react"
import Link from "next/link"
import { useRecoilState } from "recoil"
import { openCommentState } from "../atom/openComment"


interface _IPost {
    post:IPost,

}

const Post = ({ post }: _IPost) => {
    const [openComment,setOpenComment] = useRecoilState(openCommentState);

  return (
    <Link href={`/post/${post?.id}`} >
        <div className="bg-[#1E293B] shadow-sm cursor-pointer group-hover:bg-[#1b2433] transition-all ease-in-out duration-100 border-b border-gray-700 border-r border-r-gray-800 rounded-md py-2 px-4">
            <div className="flex space-x-2">
                <div className="flex-col items-center flex">
                    <BsArrowUpShort className="text-lg" />
                    <span className=" text-sm">0</span>
                    <BsArrowDownShort className="text-lg" />
                </div>
                <div className="space-y-2 flex-1 ">
                    <div className="flex justify-between items-center ">
                        <h1 className="text-lg md:text-xl font-semibold">
                            {post?.title}
                        </h1>
                        <img src={post?.talkZ_user?.image || "https://i.pinimg.com/564x/a5/f6/47/a5f647e37b2573fc3d564ed0be08d500.jpg"} alt={post?.talkZ_user?.name} className="rounded-full w-[35px]  h-[35px]"  />
                    </div>
                
                
                    <p>
                        {post?.body}
                    </p>
                    {post?.image && (
                        <img src={post.image} alt={post.title} className="w-full"  />
                    )}
                    <div className="flex items-center gap-x-2">
                        <Link href={`/explore/${post?.talkZ_subtalkz?.topic}`}>
                            <span className="text-gray-500 hover:underline hover:text-[#0ea5e9]">t/{post?.talkZ_subtalkz?.topic}</span>
                        
                        </Link>
                        <span className="font-semibold">Posted by <span className="text-[#0EA5E9]">{post?.username}</span></span>
                        <div className="text-gray-700 text-sm font-medium">
                        <TimeAgo
                            datetime={post?.created_at}
                        />
                        </div>
    
                    </div>
                    <div className="flex items-center gap-x-1 cursor-pointer hover:bg-gray-700 px-2 w-[45px] rounded-lg" onClick={()=>setOpenComment(!openComment)}>
                        <BiCommentDetail />
                        <span>{post?.talkz_commentList?.length}</span>
                    </div>
     
                </div>
                
            </div>
        </div>
    </Link>
   
  )
}

export default Post