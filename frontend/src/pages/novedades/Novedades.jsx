import { useLoaderData } from 'react-router-dom'


const Novedades = () => {
  const {products}= useLoaderData()
return (
  <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div className="-m-1 flex flex-wrap md:-m-2">
    { 
    
    products.filter(product => {
            if(product.id !== (product.id + 1))
            return product.id
          }).map((product) => (
      <div key={product.id} className={`flex w-1/2 flex-wrap ${product.id % 2 === 0 ? '' : 'order-last lg:order-first'}`}>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={product.image} />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={product.image} />
        </div>
        <div className="w-full p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src={product.image} />
        </div>
      </div>
    ))}
  </div>
</div>
)
      }

      export default Novedades;