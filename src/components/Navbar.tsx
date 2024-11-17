import Logo from "../assets/images/movieLogo.png";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img src={Logo} alt="" className="w-[50px]" />
      <Link to="/" className="text-blue-600 text-2xl font-bold">
        Home
      </Link>
      <Link to="/watchlist" className="text-blue-600 text-2xl font-bold">
        Watchlist
      </Link>
    </div>
  );
};

export default navbar;
