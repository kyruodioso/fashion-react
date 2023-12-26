import { useEffect, useRef } from 'react';
import {register} from 'swiper/element/bundle';


const Carrousel = () => {
    const swiperRef = useRef(null);

    useEffect(()=>{
        register()

  

    //Object with parameters
    const params={
        slidesPerWiew:3,
        breakpoints:{
            768:{
                slidesPerView:4,
            }
        }
    }

    //Assign it to swiper element
    Object.assign(swiperRef.current, params);
    //initialize swiper
    swiperRef.current.initialize();
},[]);

  return (
    <>
    <swiper-container init="false" ref={swiperRef}>
        ...
    </swiper-container>
    </>
  )
}

export default Carrousel