import { useContext, useEffect, useState } from "react";
// import { ProductsDisplayPage } from "./productDisplayPage";
import { CategoryCard } from "../components/CategoryCard";
import { Carousel } from "../components/Carousel";
import { MyContext } from "../utils/ContextProvider";
import styles from "../styles/HomePage.module.scss";

export const HomePage = ()=>{
    // const url = "https://fakestoreapi.com/products/categories";
    // const [categories, setCategories] = useState([]);
    // const fetchCategoties = async (url)=>{
    //     console.log("fetchCategoties");
    //     try{
    //         const response = await fetch(url);
    //         console.log(response);
    //         if(!response.ok){
    //             throw new Error("fetch failed");
    //         }
    //         const data = await response.json();
    //         if(!Array.isArray(data) || data.length <= 0){
    //             throw new Error("wrong data fetched");
    //         }
    //         console.log(data);

    //         setCategories(data);
    //     }
    //     catch(error){
    //         console.log(error);
    //         setCategories([]);
    //     }
    // };

    // useEffect(()=>{
    //     categories.length === 0 && fetchCategoties(url);
    // },[categories]);
    const {productsContext, fetchProducts} = useContext(MyContext);
    const categories = Object.keys(productsContext);

    // const images = {
    //     electronics : "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     jewelery : "https://images.unsplash.com/photo-1665077713402-ad959854d778?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     "men's clothing" :"https://images.unsplash.com/photo-1577686323569-40b90424099b?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     "women's clothing": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    // }

    return (
        <div className={styles.homepage}>
            <Carousel categories={categories} fetchProducts={fetchProducts}/>
            {/* {
                categories.map(category=>(<CategoryCard category={category} imgUrl={images[category]} key={category} fetchProducts={fetchProducts}/>))
            } */}
        </div>
    );
};