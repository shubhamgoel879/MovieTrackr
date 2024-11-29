import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import TodoRedux from "./components/Todo-redux/Todo";

function App() {

  


  return (
    <> 
    <TodoRedux/>
      {/* <BrowserRouter>
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
      </BrowserRouter> */}
    </>
  );
}

export default App;
