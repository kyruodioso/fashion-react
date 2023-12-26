import CarouselComponent from "./carrousel/Carrousel"


const Home = () => {
  return (
    <>
    
      <main>
        <CarouselComponent/>
        <section id="section1">
          <h2>Sección 1</h2>
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