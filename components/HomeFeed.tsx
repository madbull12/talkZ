import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_POSTS } from '../graphql/queries'

const HomeFeed = () => {
  const { data,error } = useQuery(GET_ALL_POSTS);

  console.log(data?.getTalkZ_postList)
  return (
    <div>
      
    </div>
  )
}

export default HomeFeed