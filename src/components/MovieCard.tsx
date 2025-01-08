import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { addToWatchList, removeFromWatchList } from "../app/MovieSlice";

export interface Movie {
  imagePath: String;
  name: String;
  id: string;
  score: number;
  releaseYear: number
}

const MovieCard = ({ movie }: { movie: any }) => {
  const watchList = useSelector((state: RootState) => state.watchList);
  const dispatch = useDispatch();
  const addMovieToWatchList = (movie: any) => {
    const movieObj: Movie = {
      id: movie.id,
      imagePath: "https://www.thetvdb.com" + movie.image,
      name: movie.name,
      score: movie.score,
      releaseYear: movie.year
    };
    dispatch(addToWatchList(movieObj));
  };

  const removeMovieFromWatchList = (movie: any) => {
    dispatch(removeFromWatchList(movie.id));
  };

  const isMovieInWatchList = (movieId: string): Boolean => {
    return watchList.filter((movie) => movie.id === movieId).length === 1;
  };

  return (
    <div
      className="group m-5 h-[50vh] w-[220px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between"
      style={{ backgroundImage: `url(https://www.thetvdb.com${movie.image})` }}
    >
      {!isMovieInWatchList(movie.id) ? (
        <div
          onClick={() => addMovieToWatchList(movie)}
          className="ml-auto px-2 py-2 hover:cursor-pointer hover:scale-150 duration-300"
        >
          &#129293;
        </div>
      ) : (
        <div
          onClick={() => removeMovieFromWatchList(movie)}
          className="ml-auto px-2 py-2 hover:cursor-pointer hover:scale-150 duration-300"
        >
          &#10084;
        </div>
      )}
      <div className="hidden group-hover:block text-white bg-gradient-to-t text-center w-full bg-black rounded-b-xl">
        {movie.name}
      </div>
    </div>
  );
};

export default MovieCard;
