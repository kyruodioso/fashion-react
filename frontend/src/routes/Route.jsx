import TopPage from "../components/topPage/index.jsx"
import Header from "../layout/header/index.jsx"
import Footer from "../layout/footer/index.jsx"
import { Outlet } from "react-router-dom"
const info = {
  name: 'Nombre Local',
  uri:'/'
}

function Route() {
  return (
    <>
      <Header {...info} />
      <Outlet/>
      <TopPage />
      <Footer info={info} />
    </>
  )
}

export default Route