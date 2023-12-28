import { VITE_API_URL } from "../../config"


export const useProductJewelery= async()=>{
    const res =await fetch(`${VITE_API_URL}/products/category/jewelery`)
        const jewelery = await res.json()
    return {jewelery}
}