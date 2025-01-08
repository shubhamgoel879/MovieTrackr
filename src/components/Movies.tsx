import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [tvDbToken, setTvDbtoken] = useState('');
  

  function moveToNextPage() {
    setPageNo((prevPageNo) => prevPageNo + 1);
  }

  function moveToPrevPage() {
    setPageNo((prevPageNo) => (prevPageNo === 1 ? prevPageNo : prevPageNo - 1));
  }

  useEffect(() => {
    const options = {
      method: "POST",
      url: `https://api4.thetvdb.com/v4/login`,
      data: {
        apikey: '3b3a369c-5f61-4969-b359-3912ff3650dc'
      }
    };
    axios
      .request(options)
      .then((response) => {
        setTvDbtoken(response.data.data.token);
      })
      .catch((error) => {
        console.error('Error while getting token from tvdb' + error);
      });
  }, [])

  useEffect(() => {
    if(!tvDbToken) 
      return;

    const options = {
      method: "GET",
      url: `https://api4.thetvdb.com/v4/movies?page=${pageNo}`,
      headers: {
        Authorization:
          "Bearer"+ " " + tvDbToken,
      },
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.data.slice(0, 29));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pageNo, tvDbToken]);

  return (
    <div className="m-5">
      <div className="text-2xl font-bold text-center m-5">Trending Movies</div>
      <div className="flex flex-row flex-wrap flex-start">
        {movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
      <Pagination moveToNextPage={moveToNextPage} moveToPrevPage={moveToPrevPage} pageNo={pageNo}/>
    </div>
  );
};

export default Movies;
