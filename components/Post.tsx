import { BsArrowDownShort, BsArrowUpShort, } from "react-icons/bs"
import { IPost, User, Vote } from "../interface"
import TimeAgo from 'timeago-react'
import { BiCommentDetail } from 'react-icons/bi'
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRecoilState } from "recoil"
import { openCommentState } from "../atom/openComment"
import { useMutation, useQuery } from "@apollo/client"
import { GET_USER_BY_EMAIL, GET_VOTE_LIST_BY_POST_ID } from "../graphql/queries"
import { DotSpinner } from '@uiball/loaders'
import { useSession } from "next-auth/react"
import toast from "react-hot-toast"
import client from "../apollo-client"
import { ADD_VOTE } from "../graphql/mutations"
import Image from "next/image"



interface _IPost {
    post:IPost,

}

const Post = ({ post }: _IPost) => {
    const [openComment,setOpenComment] = useRecoilState(openCommentState);
    const { data:session } = useSession();
    const [currentUser,setCurrentUser] = useState<any>();
    const [vote,setVote] = useState<boolean>();
    const [addVote] = useMutation(ADD_VOTE,{
        refetchQueries:[GET_VOTE_LIST_BY_POST_ID,'getTalkz_voteUsingPost_id']
    })
    const { data,loading } = useQuery(GET_VOTE_LIST_BY_POST_ID,{
        variables:{
            id:post?.id
        }
    });

    const upVote = async (isUpVote:boolean) => {
        if(!session) {
            toast("You'll need to sign in to vote");
            return;
        }

        setVote(isUpVote)


        if(vote && isUpVote) return;
        if(vote === false && !isUpVote) return;

       await addVote({
            variables:{
                post_id:post?.id,
                upvote:isUpVote,
                username:session?.user?.name,
                user_id:currentUser?.id
            }
        });

        
        
    }

    const displayVotes = (votes:Vote[])=>{
            
        console.log(votes)
        const totalValues =  votes?.reduce((total,vote)=>(
            vote.upvote ? (total+=1) : (total-=1)
        ),0)

        if(votes?.length === 0) return 0;
        if(totalValues === 0) {
            return votes[0]?.upvote ? 1 : -1
        }
        
        return totalValues;

    }   


    useEffect(()=>{
        const votes:Vote[] = data?.getTalkz_voteUsingPost_id;

        const getCurrentUser = async() => {
            try {
                const { data:{ getTalkz_userByEmail:user } } = await client.query({
                    query:GET_USER_BY_EMAIL,
                    variables:{
                        email:session?.user?.email
                    }
                });

                setCurrentUser(user)
                // console.log(user)
                const vote = votes?.find((vote)=>vote?.user_id === currentUser?.id)?.upvote
                setVote(vote)
                console.log(vote)

            } catch(err) {
                console.log(err);
            }
        } 
        getCurrentUser();


      

    },[]);  



  return (
    <>
    {loading && (
        <div className="flex items-center justify-center pt-4">
            <DotSpinner 
                size={40}
                speed={0.9} 
                color="#0EA5E9" 
                    
            />
        </div>
    )}
        <Link href={`/post/${post?.id}`} >
            <div className="bg-[#1E293B] shadow-sm cursor-pointer group-hover:bg-[#1b2433] transition-all ease-in-out duration-100 border-b border-gray-700 border-r border-r-gray-800 rounded-md py-2 px-4">
                <div className="flex space-x-2">
                    <div className="flex-col items-center flex">
                        <BsArrowUpShort className={`text-xl hover:text-[#0EA5E9] rounded-full ${vote && "text-[#0EA5E9]"}`}  onClick={()=>upVote(true)} />
                        <span className=" text-sm">{displayVotes(data?.getTalkz_voteUsingPost_id)}</span>
                        <BsArrowDownShort className={`text-xl hover:text-[#0EA5E9] rounded-full ${vote===false && "text-[#0EA5E9]"}`} onClick={()=>upVote(false)} />
                    </div>
                    <div className="space-y-2 flex-1 text-sm md:text-base">
                        <div className="flex justify-between items-center ">
                            <h1 className="text-lg md:text-xl font-semibold">
                                {post?.title}
                            </h1>
                            <Image src={post?.talkZ_user?.image || "https://i.pinimg.com/564x/a5/f6/47/a5f647e37b2573fc3d564ed0be08d500.jpg"} alt={post?.talkZ_user?.name} width={35} height={35} className="rounded-full "  />
                        </div>
                    
                    
                        <p>
                            {post?.body}
                        </p>
                        {post?.media && (
                            <img src={post.media} alt={post.title} className="w-full"  />
                        )}
                        <div className="flex items-center gap-x-2 whitespace-nowrap justify-between">
                            <div className="flex flex-col md:flex-row gap-x-2">
                                <Link href={`/explore/${post?.talkZ_subtalkz?.topic}`}>
                                    <span className="text-gray-500 hover:underline hover:text-[#0ea5e9]">t/{post?.talkZ_subtalkz?.topic}</span>
                                
                                </Link>
                            <span className="font-semibold">Posted by <span className="text-[#0EA5E9]">{post?.username}</span></span>
                            </div>
                           
                            <div className="text-gray-700 text-sm font-medium">
                            <TimeAgo
                                datetime={post?.created_at}
                            />
                            </div>
        
                        </div>
                        <div className="flex items-center gap-x-1 cursor-pointer hover:bg-gray-700 px-2 w-[45px] rounded-lg" onClick={(e)=>{
                            e.stopPropagation();
                            setOpenComment(!openComment)
                        }}>
                            <BiCommentDetail />
                            <span>{post?.talkz_commentList?.length}</span>
                        </div>
        
                    </div>
                    
                </div>
            </div>
        </Link>
    </>
    
   
  )
}

export default Post