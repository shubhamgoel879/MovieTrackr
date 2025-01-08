import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../components/MovieCard";

const getWatchListFromLocalStorage = () => {
  const localWatchList = localStorage.getItem("watchList");
  if (!localWatchList) {
    const emptyWatchList = [] as Movie[];
    localStorage.setItem("watchList", JSON.stringify(emptyWatchList));
    return emptyWatchList;
  } else return JSON.parse(localWatchList) as Movie[];
};

const initialState = {
  watchList: getWatchListFromLocalStorage(),
};

export const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    addToWatchList: (state, action) => {
      state.watchList.push(action.payload);
      localStorage.setItem("watchList", JSON.stringify(state.watchList))
    },
    removeFromWatchList: (state, action) => {
      state.watchList = state.watchList.filter(
        (movie) => movie.id !== action.payload
      );
      localStorage.setItem("watchList", JSON.stringify(state.watchList))
    },
    setWatchList: (state, action) => {
      state.watchList = action.payload
    },
  },
});

export const { addToWatchList, removeFromWatchList, setWatchList } = movieSlice.actions;

export default movieSlice.reducer;
