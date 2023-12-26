import Navbar from "../navbar"
import Search from "./Search"

const Header = ({ info }) => {
  return (
    <div className=" flex-row items-center justify-around">
    <header id="top-ref" className="sticky flex flex-col top-0 left-0 right-0 bg-gray-200 p-4 z-60 h-full" >
      <div className="flex flex-row items-center justify-around">
      <Search />
        <a href="/"><h3 className="text-2xl font-semibold">{info.name}</h3></a>
        <h2>Carrito</h2>
      </div>
    </header>
    <Navbar />
    </div>)
}

export default Header
