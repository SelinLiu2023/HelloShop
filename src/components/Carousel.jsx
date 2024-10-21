import { CategoryCard } from "./CategoryCard";
import styles from "../styles/Carousel.module.scss";
import { useState } from "react";
const images = {
    electronics : "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    jewelery : "https://images.unsplash.com/photo-1665077713402-ad959854d778?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "men's clothing" :"https://images.unsplash.com/photo-1577686323569-40b90424099b?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "women's clothing": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

}

export const Carousel = ({categories})=>{
    const[index, setIndex] = useState(0);
    const categoriesCount = categories.length;
    let categoriesDisplayArr = [];
    const categoriesDisplayCount = 3;
    const handlePrevClick = ()=>{
        setIndex(index =>(index - 1 + categoriesCount)% categoriesCount);
    };
    const handleNextClick = ()=>{
        setIndex(index =>(index + 1)% categoriesCount);
    };
    if(index + categoriesDisplayCount > categoriesCount){
        categoriesDisplayArr = [...categories.slice(index),
                            ...categories.slice(0, index + categoriesDisplayCount - categoriesCount)];
    }else{
        categoriesDisplayArr = categories.slice(index, index + categoriesDisplayCount);
    }
    return(
        <div className={styles.carouselDisplay}>
            <button onClick={handlePrevClick}>{"<"}</button>
            <div  className={styles.carousel}>
            {
                categoriesDisplayArr.map(category=><CategoryCard category={category} imgUrl={images[category]} key={category} className={styles.categoryCard}/>)
            }
            </div>
            <button onClick={handleNextClick}>{">"}</button>

        </div>
    )
}