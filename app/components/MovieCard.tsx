"use client";

import { Movie, User } from "@prisma/client";
import { BsFillPlayFill } from "react-icons/bs";
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/navigation";
import Image from 'next/image'

interface MovieCardProps {
  data: Movie
  currentUser: User | null
}

const MovieCard: React.FC<MovieCardProps> = ({
  data,
  currentUser,
}) => {
  const router = useRouter()
  return (
    <div className='group bg-zinc-900 col-span relative h-[12vw]'>
      <Image
        src={data.thumbnailUrl}
        alt="Thumbnail"
        className='cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]'
        width={100}
        height={100}
      />

      <div className='opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x[2vw] group-hover:opacity-100'>
        <Image
          src={data.thumbnailUrl}
          alt="Thumbnail"
          className='cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]'
          width={100}
          height={100}
        />
        <div className='z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md'>
          <div className='flex flex-row items-center gap-3'>
            <div onClick={() => router.push(`/watch/${data.id}`)}
              className='cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300'
            >
              <BsFillPlayFill size={30} />
            </div>
            <FavoriteButton
              currentUser={currentUser}
              movieId={data.id}
            />
          </div>
          <p className='text-green-400 font-semibold mt-4'>
            New <span className='text-white'>2023</span>
          </p>

          <div className='flex flex-row mt-4 gap-2 items-center'>
            <p className='text-white text-[10px] lg:text-sm'>
              {data.duration}
            </p>
          </div>
          <div className='flex flex-row mt-4 gap-2 items-center'>
            <p className='text-white text-[10px] lg:text-sm'>
              {data.genre}
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default MovieCard;