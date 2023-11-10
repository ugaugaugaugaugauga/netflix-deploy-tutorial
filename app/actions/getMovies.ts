// getCurrentUser.ts

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import prismadb from '@/app/libs/prismadb';
import { Movie } from '@prisma/client';

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getMovies(): Promise<Movie[] | null> {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const movies = await prismadb.movie.findMany()

    return movies

  } catch (error: any) {
    return null;
  }
}
