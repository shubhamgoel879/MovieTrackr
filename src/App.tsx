import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Movies />
                </>
              }
            />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
