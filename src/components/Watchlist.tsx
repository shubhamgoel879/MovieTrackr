import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { removeFromWatchList } from "../app/MovieSlice";

const Watchlist = () => {
  const watchList = useSelector((state: RootState) => state.watchList);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="flex justify-center w-[9rem] bg-blue-400 text-white rounded-md mx-2">
          All Genre
        </div>
        <div className="flex justify-center w-[9rem] bg-gray-400 text-white rounded-md mx-2">
          Action
        </div>
        <div className="flex justify-center w-[9rem] bg-gray-400 text-white rounded-md mx-2">
          Crime
        </div>
      </div>
      <div className="flex justify-center my-4">
        <input
          type="text"
          className="h-[3rem] w-[18rem] outline-none px-4"
          placeholder="Search for movies"
        />
      </div>
      <div className="overflow-hidden border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Ratings</th>
              <th>Release Year</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {watchList.map((movie) => {
              return (
                <tr className="border-b-2">
                  <td className="flex justify-center py-6">
                    <img
                      className="h-[10rem] w-[7rem]"
                      src={movie.imagePath as string}
                      alt="Image unavailable"
                    />
                  </td>
                  <td>{movie.name}</td>
                  <td>{movie.score}</td>
                  <td>{movie.releaseYear}</td>
                  <td className="hover:cursor-pointer hover:scale-150 duration-300 px-4" onClick={() => dispatch(removeFromWatchList(movie.id))}>&#10060;</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
