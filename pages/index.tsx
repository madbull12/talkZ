import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CreatePost from '../components/CreatePost'
import Header from '../components/Header'
import HomeFeed from '../components/HomeFeed'


const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=' pt-20 relative'>
        <CreatePost />
        <HomeFeed />
      </div>

   
     
    </div>
  )
}

export default Home
