import Logo from "../assets/images/movieLogo.png";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img src={Logo} alt="" className="w-[50px]" />
      <Link to="/" className="text-blue-600 text-2xl font-bold hover:cursor-pointer hover:scale-110 duration-300">
        Home
      </Link>
      <Link to="/watchlist" className="text-blue-600 text-2xl font-bold hover:cursor-pointer hover:scale-110 duration-300">
        Watchlist
      </Link>
    </div>
  );
};

export default navbar;
