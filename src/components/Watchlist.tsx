import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { removeFromWatchList, setWatchList } from "../app/MovieSlice";
import { useState } from "react";
import { Movie } from "./MovieCard";

const Watchlist = () => {
  const watchList = useSelector((state: RootState) => state.watchList);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const sortIncreasing = (basis: keyof Movie) => {
    dispatch(
      setWatchList(
        [...watchList].sort(
          (movieA, movieB) =>
            (movieA[basis] as number) - (movieB[basis] as number)
        )
      )
    );
  };

  const sortDecreasing = (basis: keyof Movie) => {
    dispatch(
      setWatchList(
        [...watchList].sort(
          (movieA, movieB) =>
            (movieB[basis] as number) - (movieA[basis] as number)
        )
      )
    );
  };

  return (
    <>
      <div className="w-fit mx-auto my-2">
        <input
          type="text"
          className="h-[3rem] w-[25rem] outline-none px-4 border"
          placeholder="Search for movies by name or release year . . ."
          onChange={handleSearch}
          value={search}
        />
      </div>
      {(watchList.length == 0) ? <div className="text-2xl font-bold text-center m-5">No Movies in watchlist</div> : 
        (<div className="overflow-hidden border border-gray-200 m-8">
          <table className="w-full text-gray-500 text-center">
            <thead className="border-b-2">
              <tr>
                <th></th>
                <th>Name</th>
                <th>
                  <i
                    className="fa-solid fa-arrow-up px-2 hover:cursor-pointer hover:scale-105 duration-300"
                    onClick={() => sortIncreasing("score")}
                  />
                  Ratings
                  <i
                    className="fa-solid fa-arrow-down px-2 hover:cursor-pointer hover:scale-105 duration-300"
                    onClick={() => sortDecreasing("score")}
                  />
                </th>
                <th>
                  <i
                    className="fa-solid fa-arrow-up px-2 hover:cursor-pointer hover:scale-105 duration-300"
                    onClick={() => sortIncreasing("releaseYear")}
                  />
                  Release Year
                  <i
                    className="fa-solid fa-arrow-down px-2 hover:cursor-pointer hover:scale-105 duration-300"
                    onClick={() => sortDecreasing("releaseYear")}
                  />
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {watchList
                .filter(
                  (movie) =>
                    movie.name.toLowerCase().includes(search.toLowerCase()) ||
                    movie.releaseYear.toString().includes(search)
                )
                .map((movie) => {
                  return (
                    <tr className="border-b-2">
                      <td className="flex justify-center">
                        <img
                          className="h-[7rem] w-[5rem]"
                          src={movie.imagePath as string}
                          alt="Image unavailable"
                        />
                      </td>
                      <td>{movie.name}</td>
                      <td>{movie.score}</td>
                      <td>{movie.releaseYear}</td>
                      <td
                        className="hover:cursor-pointer hover:scale-150 duration-300 px-4"
                        onClick={() => dispatch(removeFromWatchList(movie.id))}
                      >
                        &#10060;
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>)
      }
    </>
  );
};

export default Watchlist;
