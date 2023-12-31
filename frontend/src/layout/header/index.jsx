import CartButton from "../../components/CartButton";
import Navbar from "../navbar";
import Search from "./Search";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({ uri,name}) => {
  return (
    <>
    <div className=" flex-row items-center justify-around">
      <header
        id="top-ref"
        className="sticky flex flex-col top-0 left-0 right-0 bg-gray-200 p-4 z-60 h-full"
      >
        <div className="flex flex-row items-center justify-around">
          <Search />
          <Link to={uri}>
            <h3 className="text-2xl font-semibold">{name}</h3>
          </Link>
          <CartButton />
        </div>
      </header>
      <Navbar />
    </div>
    </>
  );
};

export default Header;
