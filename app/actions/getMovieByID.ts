import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prismadb from '@/app/libs/prismadb';
import { Movie } from '@prisma/client';

interface IParams {
  movieId?: string;
}

export default async function getMovieById(
  params: IParams
): Promise<Movie | null> {
  try {
    const { movieId } = params;

    if (!movieId) {
      throw new Error('Invalid ID')
    }

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId
      }
    })

    if (!movie) {
      throw new Error('invalid ID')
    }
    return movie

  } catch (error: any) {
    return null;
  }
}
