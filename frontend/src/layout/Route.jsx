import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
const Route=()=>{
    return(
        <>
        <Header/>
        <Navbar />
          <Outlet/>
        <Footer/>
        </>
    )
}

export default Route;