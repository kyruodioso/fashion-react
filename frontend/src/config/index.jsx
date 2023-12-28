import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home/Home'
import Route from "../routes/Route";
import NotFound from "../pages/notFound/NotFound";

export const route= createBrowserRouter([
    {
        path:'/',
        element:<Route />,
        errorElement:<NotFound/>,
        children:[
            {
                index:true,
                element:<Home/>,

            }
        ]
    }
])