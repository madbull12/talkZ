import { useMutation } from "@apollo/client";
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useState } from "react";
import { BsImages,BsLink45Deg } from 'react-icons/bs'
import client from "../apollo-client";
import { ADD_POST, ADD_SUBTALKZ } from "../graphql/mutations";
import { GET_ALL_POSTS, GET_SUBTALKZ_BY_TOPIC, GET_USER_BY_EMAIL } from "../graphql/queries";
import toast from 'react-hot-toast';

type Props = {
    topic?:string
}

const CreatePost = ({ topic }:Props) => {
    const { data:session } = useSession();

    const [title,setTitle] = useState<string>("");
    const [subtalkz,setSubtalkz] = useState<string>("");
    const [body,setBody] = useState<string>("");
    const [imageUrl,setImageUrl] = useState<string>("");
    const [imageBox,setImageBox] = useState<boolean>(false);

    const[addPost]= useMutation(ADD_POST,{
        refetchQueries:[GET_ALL_POSTS]
    });
    const[addSubtalkz] = useMutation(ADD_SUBTALKZ);


    const handleSubmit = async() => {
        // console.log({
        //     title,
        //     subtalkz,
        //     body,
        //     imageUrl
        // })
       
    const toastId = toast.loading('Creating a new post');

        try {
            const { data: { getTalkz_subtalkzListbyTopic } } = await client.query({
                query: GET_SUBTALKZ_BY_TOPIC,
                variables: {
                    topic:topic || subtalkz
                }
            })

            
            const { data: {  getTalkz_userByEmail } } = await client.query({
                query: GET_USER_BY_EMAIL,
                variables: {
                    email:session?.user?.email
                }
            })

            const subtalkzExists = getTalkz_subtalkzListbyTopic.length>0

            if(!subtalkzExists) {
               const { data: { insertTalkZ_subtalkz: newSubtalkz }} = await addSubtalkz({
                    variables:{
                        topic:subtalkz
                    }
                })
   
              

                const image = imageUrl || "";

                const { data: { insertTalkZ_post:newPost } } = await addPost({
                    variables:{
                        body,
                        image,
                        subtalkz_id:newSubtalkz.id,
                        title,
                        username:session?.user?.name,
                        user_id:getTalkz_userByEmail.id
                    }
                 })

                console.log(newPost)

            } else {
                const image = imageUrl || "";

                const { data: { insertTalkz_post:newPost } } = await addPost({
                    variables:{
                        body,
                        image,
                        subtalkz_id:getTalkz_subtalkzListbyTopic[0].id,
                        title,
                        username:session?.user?.name,
                        user_id:getTalkz_userByEmail.id
                    }
                })
                console.log("using existing subtalkz id")
                console.log(newPost)

                
            }
            toast.success("Post created successfully",{
                id:toastId
            })

            
        } catch(err) {
            toast.error("There's an error creating the post",{
                id:toastId
            })
            console.log(err)
        } finally {
            setTitle("")
        }
    }

    const uploadImage = (files:any) => {
        console.log(files[0])
    }

  return (
    <section className="lg:pt-16 relative">
        <div className="bg-[#1E293B] sticky z-[100]  top-20 rounded-xl mt-4 text-gray-400 border-t border-gray-700 shadow-md px-2 md:px-4 py-1 md:py-2 font-semibold flex items-center gap-2">
            {session && (
                <Image width={35} height={35} src={session?.user?.image || "sdsds"} alt={session?.user?.name || "profile"} objectFit="cover" className="rounded-full" />
            )}
            <input disabled={!session} onChange={(e)=>setTitle(e.target.value)} value={title} className="bg-transparent text-gray-400 w-full outline-none text-sm md:text-base" placeholder={topic ? "Create a post regarding this subtalkz"  : session ? "Create a post by typing a title" : "Please login first"} />
            <div className="flex items-center gap-x-2">
                <BsImages  className={`hover:text-[#0EA5E9] ${imageBox && "text-[#0EA5E9]"}`} onClick={()=>setImageBox(!imageBox)} />
                <BsLink45Deg className="hover:text-[#0EA5E9]" />
            </div>
        </div>
        {title && (
            <div className="p-4 text-gray-400 w-full">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }} className="flex flex-col  gap-y-4 ">
                    <div className=" flex  items-center gap-x-2 text-sm md:text-base">
                        <label className="min-w-[80px]">Body:</label>
                        <input onChange={(e) => setBody(e.target.value)} type="text" placeholder="Text(optional)" className="px-2 md:px-4 py-1 md:py-2 w-full bg-[#1E293B] outline-none  border-t border-gray-700 shadow-md" />

                    </div>
                    {!topic && (
                        <div className=" flex gap-x-2 items-center text-sm md:text-base">
                            <label className="min-w-[80px]">Subtalkz:</label>
                            <input onChange={(e) => setSubtalkz(e.target.value)} type="text" placeholder="Discussion's topic ie programming" required className="px-2 md:px-4 py-1 md:py-2 w-full bg-[#1E293B] outline-none  border-t border-gray-700 shadow-md"  />

                        </div>
                    )}
             
                    {imageBox && (
                        <div className=" flex items-center gap-x-2">
                            <label className="min-w-[80px] whitespace-nowrap">Image URL:</label>
                            <input type="file" onChange={(e)=>uploadImage(e.target.files)} />
                            <input onChange={(e) => setImageUrl(e.target.value)} type="text" placeholder="Drop an image URL here(optional)" className="px-2 md:px-4 py-1 md:py-2 w-full bg-[#1E293B] outline-none  border-t border-gray-700 shadow-md"  />

                        </div>
                    )}
                    <button type="submit" className="bg-[#0EA5E9] whitespace-nowrap text-white font-bold rounded-full md:py-2">Create post</button>
               
                </form>
            </div>
        )}
    </section>

  )
}

export default CreatePost