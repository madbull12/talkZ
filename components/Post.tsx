import { BsArrowDownShort, BsArrowUpShort, } from "react-icons/bs"
import { IPost } from "../interface"
import TimeAgo from 'timeago-react'
import { BiCommentDetail } from 'react-icons/bi'
import { useState } from "react"


interface _IPost {
    post:IPost
}

const Post = ({ post }: _IPost) => {
    const [openComment,setOpenComment] = useState<boolean>(false)
  return (
    <div className="bg-[#1E293B] shadow-sm border-b border-gray-700 border-r border-r-gray-800 rounded-md py-2 px-4">
        <div className="flex space-x-2">
            <div className="flex-col items-center flex">
                <BsArrowUpShort className="text-lg" />
                <span className=" text-sm">0</span>
                <BsArrowDownShort className="text-lg" />
            </div>
            <div className="space-y-2 flex-1 ">
                <div className="flex justify-between items-center ">
                    <h1 className="text-lg md:text-xl font-semibold">
                        {post.title}
                    </h1>
                    <img src={post?.talkZ_user?.image} alt={post?.talkZ_user?.name} className="rounded-full w-[35px]  h-[35px]"  />
                </div>
            
               
                <p>
                    {post.body}
                </p>
                {post.image && (
              
                        <img src={post.image} alt={post.title} className="w-full"  />

                  

                )}
                <div className="flex items-center gap-x-2">
                    <span className="text-gray-500">t/{post.talkZ_subtalkz?.topic}</span>
                    <span className="font-semibold">Posted by <span className="text-[#0EA5E9]">{post.username}</span></span>
                    <div className="text-gray-700 text-sm font-medium">
                    <TimeAgo
                        datetime={post.created_at}
                    />
                    </div>
   
                </div>
                <div className="flex items-center gap-x-2 cursor-pointer" onClick={() => setOpenComment(!openComment)}>
                    <BiCommentDetail />
                    <span>{post.talkz_commentList.length} Comments</span>
                </div>
                <div className={` ${openComment ? "block" : "hidden"}`}>
                    {post.talkz_commentList.map((comment:any)=>(
                        <div key={comment.id} className="flex justify-between items-center">

                            <p>{comment.text}</p>
        
                            <TimeAgo 
                                datetime={comment.created_at}
                                className="text-gray-700 text-sm"
                            />
                       
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Post