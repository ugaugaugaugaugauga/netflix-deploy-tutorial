"use client";

import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface WatchClientProps {
  title: string
  videoUrl: string
}

const WatchClient: React.FC<WatchClientProps> = ({
  title,
  videoUrl
}) => {
  const router = useRouter()
  return (
    <div className='h-screen w-screen bg-black'>
      <nav className='fixes w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70'>
        <AiOutlineArrowLeft
          onClick={() => router.push('/')}
          className='text-white cursor-pointer' size={40} />
        <p className='text-white text-1xl md:text-3xl font-bold'>
          <span className='font-light'>
            Watching:
          </span>
          {title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className='h-full w-full'
        src={videoUrl}></video>

    </div>
  );
}

export default WatchClient;