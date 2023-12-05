import { Button } from "../common/Button"
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'


const TopPage = () => {

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <ScrollLink 
        smooth={true} 
        duration={600}
        to="/"
        onClick={scrollToTop}
      >
        <Button className="fixed bottom-0 right-0 m-4 p-2 bg-black text-white rounded-full">
          Volver al inicio
        </Button>
      </ScrollLink>
    </>
  )
}

export default TopPage