import { useQuery } from "@apollo/client"
import Link from "next/link"
import { BsArrowUp } from "react-icons/bs"
import { GET_ALL_SUBTALKZ_BY_LIMIT } from "../graphql/queries"
import { Subtalkz } from '../interface'

const TopCommunities = () => {
    const { data } = useQuery(GET_ALL_SUBTALKZ_BY_LIMIT,{
        variables:{
            limit:10
        }
    })

  return (
    <aside className="bg-[#1E293B] text-gray-400 shadow-sm p-4 fixed w-[250px] space-y-3 rounded-lg  top-24 right-2 hidden xl:block">
        <h1 className="font-bold text-lg">Top Communities</h1>
        {data?.getTalkZ_subtalkzListByLimit?.map((subtalkz:Subtalkz)=>(
            <div className="flex justify-between" key={subtalkz.id}>
                <Link href={`/explore/${subtalkz.topic}`}>
                    <a className="hover:underline">t/{subtalkz.topic}</a>
                </Link>
                <span>
                    <BsArrowUp />

                </span>
            </div>
        ))}
    </aside>
  )
}

export default TopCommunities