import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../utils/ContextProvider";
import { ProductCard } from "../components/ProductCard";

// import { ProductsDisplay } from "../components/ProductsDisplay";

export const ProductsDisplayPage = ()=>{
    const {category} = useParams();
    // const url = `https://fakestoreapi.com/products/category/${category}`;
    // console.log(url);
    const {productsContext, fetchProducts} = useContext(MyContext);
 
    useEffect(()=>{
        // (productsContext[category].length === 0) &&
        // fetchProducts(category);
        if (productsContext[category] === undefined || productsContext[category].length === 0) {
            fetchProducts(category);
        }
    },[category]);
    // if (!productsContext[category]) {
    //     // console.log("undefined category")
    //     return <div>Loading...</div>;
    // }
    return (
        <div>
            {
                productsContext[category].map(product=>(<ProductCard product={product} key ={product.id}/>))
            }
        </div>
    );

};