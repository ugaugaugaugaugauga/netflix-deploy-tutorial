"use client";

import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import Image from 'next/image'

interface ProfileClientProps {
  currentUser: User | null
}

const ProfileClient: React.FC<ProfileClientProps> = ({
  currentUser
}) => {
  const router = useRouter()
  return (
    <div className='flex items-center h-full justify-center'>

      <div className='flex flex-col'>
        <h1 className='text-3xl md:text-6xl text-white text-center'>Who is watching?</h1>
        <div className='flex items-center justify-center gap-8 mt-10'>
          <div onClick={() => router.push('/')}>
            <div className='group flex-row w-44 mx-auto'>
              <div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
                <Image
                  src="/images/default-blue.png"
                  alt="Profile"
                  width={200}
                  height={200}
                />
              </div>

              <div className='mt-4 text-gray-400 text-2xl text-center group-hover:text-white'>
                {currentUser?.name}

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProfileClient;