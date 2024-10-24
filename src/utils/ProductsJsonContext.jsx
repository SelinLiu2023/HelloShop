import { createContext } from "react";
import productsFromJsonContext from "../fakeData/productsDetail.json";

export const ProductsJsonContext = createContext();

export const ProductsJsonContextProvider = ({children})=>{

    const getProductById = (productId)=>{

        let productFound = null;
        // console.log("productId in getProductById",productId);
        // console.log("productsContext in getProductById", productsContext)
        for(let key in productsFromJsonContext){
            productFound = productsFromJsonContext[key].find(product => product.id == productId);//必须使用==
            if(productFound){
                return productFound;
            }
        }
        //以后增加产品fetch
    };
    return (
        <ProductsJsonContext.Provider value={{productsFromJsonContext, getProductById}}>
            {children}
        </ProductsJsonContext.Provider> 
    );
}