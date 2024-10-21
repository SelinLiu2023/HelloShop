import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import styles from "../styles/ProductsDisplay.module.scss";


export const ProductsDisplay = ({searchCategory})=>{
    console.log("ProductsDisplay Component Rendered");
    console.log("searchCategory",searchCategory);
    const url = `https://fakestoreapi.com/products/category/${searchCategory}`;
    console.log(url);
    const [productsData, setProductsData] = useState([]);
    const fetchProducts = async (url)=>{
    
        try{
            const response = await fetch(url);
            console.log(response);
            if(!response.ok){
                throw new Error("fetch failed");
            }
            const data = await response.json();
            if(!Array.isArray(data) || data.length <= 0){
                throw new Error("wrong data fetched");
            }
            setProductsData(data);
        }
        catch(error){
            console.log(error);
            setProductsData([]);
        }
    };
    useEffect(()=>{
        fetchProducts(url);
    },[searchCategory]);

    return (
        <div className={styles.productsDisplay}>
            {
                productsData.map(product=>(<ProductCard product={product} key ={product.id}/>))
            }
        </div>
    );
};