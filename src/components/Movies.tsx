import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

const Movies = () => {

 const [movies, setMovies] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api4.thetvdb.com/v4/movies?page=1",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOiIiLCJhcGlrZXkiOiIzYjNhMzY5Yy01ZjYxLTQ5NjktYjM1OS0zOTEyZmYzNjUwZGMiLCJjb21tdW5pdHlfc3VwcG9ydGVkIjpmYWxzZSwiZXhwIjoxNzMzODg1NTQwLCJnZW5kZXIiOiIiLCJoaXRzX3Blcl9kYXkiOjEwMDAwMDAwMCwiaGl0c19wZXJfbW9udGgiOjEwMDAwMDAwMCwiaWQiOiIyNzAwNTMyIiwiaXNfbW9kIjpmYWxzZSwiaXNfc3lzdGVtX2tleSI6ZmFsc2UsImlzX3RydXN0ZWQiOmZhbHNlLCJwaW4iOm51bGwsInJvbGVzIjpbXSwidGVuYW50IjoidHZkYiIsInV1aWQiOiIifQ.pvKRz9eMR6u8IUtm2glwbcs5FcqUaW5re28A5hSqIUSev05XEjpTdHjbRwgwml3KnDLacbMsbvvf0-1gYGNI55paoZo6-pCsCPFvtKHz1RtU-L7I1MtlwEAniYO6LFJXkGfPKefSRGGz4OZAAIxSArGw5tFddWt9A8IaV4FCqEHkqETlCXMOCi07ZlBrzLryxowSHvsoGs7utcRzIVY8m49YO8oNti0QSORoFdfbnXFzGG9w2jgy2XpA-XJj5whzhGqVROCmnmYm62L4RDwl8nZE3hY9wOIaWovTVz5TZiPmqgAdNd0r0zgVX7wukuyqPtgPzdsABntvIbJKjkg4xmlwWDm0_WKK-8rsDKLWI7ubLRITdMRv6lE7lLkfNfRt9KEN8XnRWzy6mxYb6wEdK1J0AsDsm_eL-ISH3inBYkFNNkBZgRsBl7w9g8ae6sz3KVpZQgZuHurJrHPjUABvEGkAIxrwZvf6k8oApbXjwAYz-Jq84_xyKbnw68Ra8P3MdhVAVyQ3SK1GGqDn8WOIo677HwOl31a4v-Vzd9RXugjyUW_1nCujvdI0idXe_PnA4fdsVoPFX7yOm2xl4vODFmt-69lIiSA5YSkX-ucWO0iMnhNXrEq_xbEOye3lew6DZp1CsRgHQnjc_tA7OjuoWc8RAWmovBnxkzCJvAymhLo",
      },
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.data.slice(0,29))
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="m-5">
      <div className="text-2xl font-bold text-center m-5">Trending Movies</div>
      <div className="flex flex-row flex-wrap flex-start">
        {
            movies.map((movie) => {
                const {image, name} = movie;
                return <MovieCard imagePath={image} movieName={name}/>
            })
        }
      </div>
    </div>
  );
};

export default Movies;
