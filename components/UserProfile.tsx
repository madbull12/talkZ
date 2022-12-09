import { useSession } from 'next-auth/react'
import Image from 'next/image';
import React from 'react'

const UserProfile = () => {
    const { data:session } = useSession();
  return (
    <div className='flex items-center flex-col text-gray-400 py-4'>
        <Image alt="user-profile" height={80} width={80} src={session?.user?.image || ""} className="rounded-full " />
        <p>{session?.user?.name}</p>
        <p>{session?.user?.email}</p>
    </div>
  )
}

export default UserProfile