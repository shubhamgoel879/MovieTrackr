import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
import AnimeLoader from "./AnimeLoader";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [tvDbToken, setTvDbtoken] = useState("");

  function moveToNextPage() {
    setMovies([]);
    setPageNo((prevPageNo) => prevPageNo + 1);
  }

  function moveToPrevPage() {
    setMovies([]);
    setPageNo((prevPageNo) => (prevPageNo === 1 ? prevPageNo : prevPageNo - 1));
  }

  useEffect(() => {
    const options = {
      method: "POST",
      url: `https://api4.thetvdb.com/v4/login`,
      data: {
        apikey: "Create your account at tvdb.com and you can create 128 bit key and use here.",
      },
    };
    axios
      .request(options)
      .then((response) => {
        setTvDbtoken(response.data.data.token);
      })
      .catch((error) => {
        console.error("Error while getting token from tvdb" + error);
      });
  }, []);

  useEffect(() => {
    if (!tvDbToken) return;

    const options = {
      method: "GET",
      url: `https://api4.thetvdb.com/v4/movies?page=${pageNo}`,
      headers: {
        Authorization: "Bearer" + " " + tvDbToken,
      },
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.data.slice(0, 28));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pageNo, tvDbToken]);

  return (
    <>
      {movies.length == 0 ? (
        <AnimeLoader />
      ) : (
        <div className="m-5">
          <div className="text-2xl font-bold text-center m-5">
            Trending Movies
          </div>
          <div className="flex flex-row flex-wrap flex-start">
            {movies.map((movie) => {
              return <MovieCard movie={movie} />;
            })}
          </div>
          <Pagination
            moveToNextPage={moveToNextPage}
            moveToPrevPage={moveToPrevPage}
            pageNo={pageNo}
          />
        </div>
      )}
    </>
  );
};

export default Movies;
