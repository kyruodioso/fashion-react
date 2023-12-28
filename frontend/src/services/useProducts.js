import { VITE_API_URL } from "../../config"

export const useProducts=async()=>{
    const res=await fetch(`${VITE_API_URL}/products`)
    const products = await res.json()
    return {products}
}

