import { useLoaderData } from "react-router-dom"
import CarouselComponent from "./carrousel/Carrousel"


const Home = () => {

  const {products}= useLoaderData()

  console.log(products)

  return (
    <>
    
      <main>
        <CarouselComponent/>
        <section id="section1">
          {products?.map((product)=>(
            <div key={product.id}>
            <h1>{product.title}</h1>
            </div>
          ))}
        </section>
        <section id="section2">
          <h2>Sección 2</h2>
        </section>
        <section id="section3">
          <h2>Sección 3</h2>
        </section>
        <section id="section4">
          <h2>Sección 4</h2>
        </section>
      </main>
      <section id="contacto">
        <h2>Contacto</h2>
      </section>
    </>
  )
}

export default Home