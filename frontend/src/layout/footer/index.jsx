const Footer = ({ info }) => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-10 flex-col bg-gray-400 text-white p-8 text-sm z-50">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between gap-20 items-center">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-0">
          LOGO
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-0">
          <h3>{info.name}</h3>
          <p>Sobre nosotros</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex flex-col gap-2">
            <span>Correo: correo@gmail.com</span>
            <span>Teléfono: 11-2222-3333</span>
            <div className="flex">
              <a href="#" className="hover:opacity-85">
                <img src="/whatsapp-icon.png" alt="WhatsApp" className="h-8" />
              </a>
              <a href="#" className="hover:opacity-85">
                <img src="/linkedin-icon.png" alt="LinkedIn" className="h-8" />
              </a>
              <a href="#" className="hover:opacity-85">
                <img src="/instagram-icon.png" alt="Instagram" className="h-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <p>Formas de pago</p>
        </div>
      </div>
      <div>
        <span className="text-sm">&copy; 2023 {info.name}. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}

export default Footer
