import getCurrentUser from "@/app/actions/getCurrentUser";
import prismadb from "@/app/libs/prismadb";
import { without } from "lodash";
import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  const body = await request.json();
  const currentUser = await getCurrentUser()
  const {
    movieId,
  } = body;

  const existingMovie = await prismadb.movie.findUnique({
    where: {
      id: movieId,
    }
  })

  if (!existingMovie) {
    throw new Error('Invalid Id')
  }

  const user = await prismadb.user.update({
    where: {
      email: currentUser?.email || '',
    },
    data: {
      favoriteIds: {
        push: movieId,
      }
    }
  })
  return NextResponse.json(user);
}

export async function DELETE(
  request: Request
) {
  const body = await request.json();
  const currentUser = await getCurrentUser()
  const {
    movieId,
  } = body;

  const existingMovie = await prismadb.movie.findUnique({
    where: {
      id: movieId,
    }
  })

  if (!existingMovie) {
    throw new Error('Invalid Id')
  }

  const updatedFavoriteIds = without(currentUser?.favoriteIds, movieId)

  const updatedUser = await prismadb.user.update({
    where: {
      email: currentUser?.email || '',
    },
    data: {
      favoriteIds: updatedFavoriteIds,
    }
  })
  return NextResponse.json(updatedUser);
}