import getMovieById from "@/app/actions/getMovieByID";
import ClientOnly from "@/app/components/ClientOnly";
import { AiOutlineArrowLeft } from "react-icons/ai";
import WatchClient from "./WatchClient";

interface IParams {
  movieId?: string;
}

const Watch = async ({ params }: { params: IParams }) => {
  const movie = await getMovieById(params)
  if (!movie) {
    return null
  }
  return (
    <ClientOnly>
      <WatchClient
        title={movie.title}
        videoUrl={movie.videoUrl}
      />
    </ClientOnly>
  );
}

export default Watch;