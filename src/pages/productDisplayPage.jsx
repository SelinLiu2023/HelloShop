import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../utils/ContextProvider";
import { ProductCard } from "../components/ProductCard";
import { UserContext } from "../utils/UserContextProvider";

export const ProductsDisplayPage = ()=>{
    const {category} = useParams();
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
        if (productsContext[category] === undefined || productsContext[category].length === 0) {
            fetchProducts(category);
        }
    },[category]);

    return (
        <div>
            {
                productsContext[category].map(product=>(<ProductCard product={product} key ={product.id}/>))
            }
        </div>
    );

};