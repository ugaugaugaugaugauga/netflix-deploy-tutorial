import prismadb from '@/app/libs/prismadb';
import { Movie } from '@prisma/client';
import getCurrentUser from './getCurrentUser';

export default async function getFavorites(): Promise<Movie[] | null> {
  try {

    const currentUser = await getCurrentUser()

    const favoriteMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds
        }
      }
    })

    return favoriteMovies

  } catch (error: any) {
    return null;
  }
}
