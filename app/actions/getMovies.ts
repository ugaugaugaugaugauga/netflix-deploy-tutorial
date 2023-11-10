import prismadb from '@/app/libs/prismadb';
import { Movie } from '@prisma/client';


export default async function getMovies(): Promise<Movie[] | null> {
  try {
    const movies = await prismadb.movie.findMany()

    return movies

  } catch (error: any) {
    return null;
  }
}
