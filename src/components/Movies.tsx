import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  

  function moveToNextPage() {
    setPageNo((prevPageNo) => prevPageNo + 1);
  }

  function moveToPrevPage() {
    setPageNo((prevPageNo) => (prevPageNo === 1 ? prevPageNo : prevPageNo - 1));
  }

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api4.thetvdb.com/v4/movies?page=${pageNo}`,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOiIiLCJhcGlrZXkiOiIzYjNhMzY5Yy01ZjYxLTQ5NjktYjM1OS0zOTEyZmYzNjUwZGMiLCJjb21tdW5pdHlfc3VwcG9ydGVkIjpmYWxzZSwiZXhwIjoxNzM4NjQ0MDQ1LCJnZW5kZXIiOiIiLCJoaXRzX3Blcl9kYXkiOjEwMDAwMDAwMCwiaGl0c19wZXJfbW9udGgiOjEwMDAwMDAwMCwiaWQiOiIyNzAwNTMyIiwiaXNfbW9kIjpmYWxzZSwiaXNfc3lzdGVtX2tleSI6ZmFsc2UsImlzX3RydXN0ZWQiOmZhbHNlLCJwaW4iOm51bGwsInJvbGVzIjpbXSwidGVuYW50IjoidHZkYiIsInV1aWQiOiIifQ.lkkWD8nPfvCdiz6zTsZj6fW9CsQio4_XXTjP8fXQbyCz1848nZ_8g0VVK20DKZyL9-FAf97Q3jm5ib0KRsS3uIJD_xjAz6RbkEOTNF4OVsDY0O6drPfcC3I8tUbKpVNujArouCHQbFNCOCqsclFgVFrbmunzh75Q349ug_O3U2OMWunQfKkORJQRTlEtL2Ntunwf5t_9VDUfaPTvp8B8I8ia9mwsf3OzlBUn1_RQsO39PVYpctZkojFzLI1URzxT7dl4CNqRmT9SqC1N1EBQ-yuzwyUi7sqL85lfogM4f43TQuhYkVg3uMwntwmDry8RClKbTHvtuNaMPfreGXIN1YZlfPGIjlJ_Z1GWpsH91T2xR4X1Rlfj3C8ueE-YieqOlvkV1dKb989BTDLTwm4oIBp6O7tPwsdUGSTJmuKbaF81_TTacTJOKhY1d4CNQ04R_71LTGdtncxL9hWMDvVhvhEEzXVhDmp7euFL8v8_v1px_mQSH5aKxjovyAYu5hCmMuWqGG-sSx2lirn3hl576Cdbtqv1B_4uehJ75J6Tw7g9RYPU108DmAHPP3pXUcQWf4zWyjEJgBrJZUA66Oftr16if5PjjLwTIHzCvQYYiMvfwlGid97LY46i76PRTXrioUKmuHEaIx38vutXlAGN5g-bG2KXI9Y3_wCS2IUmuUQ",
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
  }, [pageNo]);

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
