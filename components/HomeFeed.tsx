import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_POSTS, GET_POST_BY_TOPIC } from '../graphql/queries'
import { IPost } from '../interface';
import Post from './Post';


type Props = {
  topic?:string
}
const HomeFeed = ({ topic }: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data,error } = !topic ? useQuery(GET_ALL_POSTS) : useQuery(GET_POST_BY_TOPIC,{
    variables:{
      topic:topic
    }
  });
  console.log(data?.getTalkZ_postList || data?.getTalkZ_postListByTopic)
  const posts: IPost[] = !topic ? data?.getTalkZ_postList : data?.getTalkZ_postListByTopic

  return (
    <div className=' text-gray-400'>
      <div className='space-y-4 mt-4'>
        {posts?.map((post:IPost,i:any)=>(
          <Post key={i} post={post} />
        ))}
      </div>
    
    </div>
  )
}

export default HomeFeed