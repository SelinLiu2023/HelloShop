import { createContext } from "react";
import productsContext from "../fakeData/productsDetail.json";

export const ProductsJsonContext = createContext();

export const ProductsJsonContextProvider = ({children})=>{

    const getProductById = ()=>{
        
    };
    return (
        <ProductsJsonContext.Provider value={{productsContext, getProductById}}>
            {children}
        </ProductsJsonContext.Provider> 
    );
}