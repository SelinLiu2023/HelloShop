import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../utils/ContextProvider";
import { ProductCard } from "../components/ProductCard";
import { UserContext } from "../utils/UserContextProvider";

// import { ProductsDisplay } from "../components/ProductsDisplay";

export const ProductsDisplayPage = ()=>{
    const {category} = useParams();
    // const url = `https://fakestoreapi.com/products/category/${category}`;
    // console.log(url);
    const {productsContext, fetchProducts} = useContext(MyContext);
    const {userInfoDispatch} = useContext(UserContext);
    useEffect(() => {
        userInfoDispatch({ type: "SET_CARTICON_FIXED" });
    
        // 返回一个清理函数
        return () => {
            userInfoDispatch({ type: "SET_CARTICON_NOT_FIXED" });
        };
    
    // 确保依赖数组在这里正确传入
    }, []);
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