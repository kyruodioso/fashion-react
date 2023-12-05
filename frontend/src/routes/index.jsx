import TopPage from "../components/topPage/index.jsx"
import Header from "../layout/header/index.jsx"
import Footer from "../layout/footer/index.jsx"
import Home from "../pages/home/index.jsx"

const info = {
  name: "Nombre Local"
}

function Route() {
  return (
    <>
      <Header info={info} />
      <Home />
      <TopPage />
      <Footer info={info} />
    </>
  )
}

export default Route