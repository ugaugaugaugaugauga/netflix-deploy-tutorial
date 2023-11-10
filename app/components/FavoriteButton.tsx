"use client";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

interface FavoriteButtonProps {
  movieId: string
  currentUser: User | null
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  movieId,
  currentUser,
}) => {
  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || []

    return list.includes(movieId)
  }, [currentUser, movieId])

  const router = useRouter()
  const toggleFavorites = useCallback(async () => {
    if (isFavorite) {
      await axios.delete('/api/favorites', { data: { movieId } })
    } else {
      await axios.post('/api/favorites', { movieId })
    }

    router.refresh()
  }, [isFavorite, movieId, router]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus

  return (
    <div
      onClick={toggleFavorites}
      className='cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300'>
      <Icon className='text-white' size={25} />
    </div>
  );
}

export default FavoriteButton;