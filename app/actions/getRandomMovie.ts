import prismadb from '@/app/libs/prismadb';
import { Movie } from '@prisma/client';


export default async function getRandomMovie(): Promise<Movie | null> {
  try {
    const movieCount = await prismadb.movie.count()
    const randomIndex = Math.floor(Math.random() * movieCount)

    const randomMovie = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex
    })

    if (!randomMovie) {
      return null;
    }

    return randomMovie[0];

  } catch (error: any) {
    return null;
  }
}
