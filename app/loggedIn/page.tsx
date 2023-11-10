import { User } from "@prisma/client";
import Navbar from "../components/navbar/Navbar";
import Billboard from "../components/Bilboard";
import MovieList from "../components/MovieList";
import getRandomMovie from "../actions/getRandomMovie";
import getMovies from "../actions/getMovies";
import getFavorites from "../actions/getFavorites";
import InfoModal from "../components/InfoModal";

interface LoggedInProps {
  currentUser: User
}

const LoggedIn: React.FC<LoggedInProps> = async ({
  currentUser
}) => {

  const randomMovie = await getRandomMovie()
  const movies = await getMovies()
  const favorites = await getFavorites()
  return (
    <>
      <InfoModal
        currentUser={currentUser}
        movie={randomMovie} />
      <Navbar />
      <Billboard randomMovie={randomMovie} />
      <div className='pb-40'>
        <MovieList
          title="Trending Now"
          data={movies}
          currentUser={currentUser}
        />
        <MovieList
          title="My List"
          data={favorites}
          currentUser={currentUser}
        />
      </div>
    </>
  );
}

export default LoggedIn;