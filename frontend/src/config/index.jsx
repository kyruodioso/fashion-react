import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/Home'
import Varones from '../pages/varones/Varones'
import NotFound from "../pages/notFound/NotFound";
import Mujeres from "../pages/mujeres/Mujeres"
import Ninos from "../pages/ninos/Ninos";
import Accesorios from "../pages/accesorios/Accesorios"
import Novedades from "../pages/novedades/Novedades";

import Route from "../routes/Route";
import {useProducts} from "../services/useProducts"
import { useProductJewelery} from "../services/useProductJewelery";

export const route= createBrowserRouter([
    {
        path:'/',
        element:<Route />,
        errorElement:<NotFound/>,
        children:[
            {
                index:true,
                element:<Home/>,
                loader:useProducts


            },
            {
                path:'/caballeros',
                element:<Varones />,
            },
            {
                path:'/damas',
                element:<Mujeres/>
            },
            {
                path:'/ninos',
                element:<Ninos/>
            },
            {
                path:'/accesorios',
                element: <Accesorios/>,
                loader: useProductJewelery       },
                {
                    path:'/novedades',
                    element:<Novedades/>,
                    loader:useProducts
                },
        ]
    }
])