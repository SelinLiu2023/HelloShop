import { createContext, useEffect, useState } from "react"

export const MyContext = createContext();
export const ContextProvider = ({children})=>{
    // {
    //     categoryName :[],
    //     categoryName :[],
    // }
    const url = "https://fakestoreapi.com/products/categories";
    const [productsContext, setProductsContext] = useState({});
    const getProductById = (productId)=>{

        let productFound = null;
        // console.log("productId in getProductById",productId);
        // console.log("productsContext in getProductById", productsContext)
        for(let key in productsContext){
            productFound = productsContext[key].find(product => product.id == productId);//必须使用==
            if(productFound){
                return productFound;
            }
        }
        //以后增加产品fetch
    };
    const fetchCategoties = async (url)=>{
        try{
            const response = await fetch(url);
            // console.log(response);
            if(!response.ok){
                throw new Error("fetch failed");
            }
            const data = await response.json();
            if(!Array.isArray(data) || data.length <= 0){
                throw new Error("wrong data fetched");
            }
            // console.log(data);
            const obj = {};
            data.forEach(item => {
                obj[item] = []
            });
            setProductsContext(prev=>({
                ...prev,
                ...obj
            }));
        }
        catch(error){
            console.log(error);
            setProductsContext({});
        }
    };
    const fetchProducts = async (category)=>{
        const url = `https://fakestoreapi.com/products/category/${category}`;
        // console.log(url);
        try{
            const response = await fetch(url);
            // console.log(response);
            if(!response.ok){
                throw new Error("fetch failed");
            }
            const data = await response.json();
            if(!Array.isArray(data) || data.length <= 0){
                throw new Error("wrong data fetched");
            }
            // console.log(data);

            setProductsContext(prev=>({
                ...prev,
                [category]: data,
            }));
            
        }
        catch(error){
            console.log(error);
            setProductsContext(prev=>({
                ...prev,
                [category]: [],
            }));
        }
    };
    // useEffect(() => {
    //     console.log("productsContext updated:", productsContext);
    // }, [productsContext]);
    
    useEffect(()=>{
        (Object.keys(productsContext).length === 0) && fetchCategoties(url);
    }),[];

    // useEffect(()=>{
    //   console.log("productsContext", productsContext)
    // }),[productsContext];

    return (
        <MyContext.Provider value={{productsContext, fetchProducts, getProductById}}>

        {children}
        </MyContext.Provider>
    );

}