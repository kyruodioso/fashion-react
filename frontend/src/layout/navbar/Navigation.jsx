import { Link as ScrollLink } from 'react-scroll'

const Navigation = () => {
  return (
    <ul className='flex justify-between items-center gap-6'>
      <li>
        <ScrollLink
          to="section1" 
          smooth={true} 
          duration={600}
          offset={-140}
        >
          Sección 1
        </ScrollLink>
      </li>
      <li>
        <ScrollLink 
          to="section2" 
          smooth={true} 
          duration={600}
          offset={-140}
        >
          Sección 2
        </ScrollLink>
      </li>
      <li>
        <ScrollLink 
          to="section3" 
          smooth={true} 
          duration={600}
          offset={-140}
        >
          Sección 3
        </ScrollLink>
      </li>
      <li>
        <ScrollLink 
          to="section4" 
          smooth={true} 
          duration={600}
          offset={-140}
        >
          Sección 4
        </ScrollLink>
      </li>
      <li>
        <ScrollLink 
          to="contacto" 
          smooth={true} 
          duration={600}
          offset={-140}
        >
          Contacto
        </ScrollLink>
      </li>
    </ul>
  )
}

export default Navigation
