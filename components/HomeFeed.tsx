import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_POSTS } from '../graphql/queries'
import { IPost } from '../interface';
import Post from './Post';

const HomeFeed = () => {
  const { data,error } = useQuery(GET_ALL_POSTS);
  console.log(data?.getTalkZ_postList)

  return (
    <div className=' text-gray-400'>
      <div className='space-y-4 mt-4'>
        {data?.getTalkZ_postList.map((post:IPost,i:any)=>(
          <Post key={i} post={post} />
        ))}
      </div>
    
    </div>
  )
}

export default HomeFeed