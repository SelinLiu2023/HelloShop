import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../utils/ContextProvider";
import { UserContext } from "../utils/UserContextProvider";
import styles from "../styles/SingleProductPage.module.scss";
import productsFromJson from "../fakeData/productsDetail.json";
export const SingleProductPage = ()=>{
    const {id} = useParams();
    const {getProductById} = useContext(MyContext);
    const product = getProductById(id);
    // console.log("product", product);

    const {userInfoDispatch, getProductInCartById} = useContext(UserContext);
    const productInCart = getProductInCartById(id);
    console.log("productsFromJson",productsFromJson)
    // const productFromLocalJson =productsFromJson.products.find(item=>item.id == id);
    // console.log("productFromLocalJson",productFromLocalJson);
    const handleAddToCart = ()=>{
        userInfoDispatch({type: "ADD_PRODUCT_IN_CART", 
                            payload: product});
    };
    const handleRemoveFromCart = ()=>{
            userInfoDispatch({type: "REMOVE_PRODUCT_FROM_CART", 
                        payload: product});
    };
    // useEffect(()=>{
    //     userInfoDispatch({type: "SET_CARTICON_FIXED"});
    //     return ()=>{
    //         userInfoDispatch({type: "SET_CARTICON_NOT_FIXED"});
    //     }
    // }),[];
    return (

        <div className={styles.single_product_page}>
            <h2>{product.title}</h2>
            <img src={product.image} />
            <div className={styles.product_info}>
                <p>Price : {product.price} Euro</p>
                <p>rate: {product.rating.rate}</p>
                <p>Product Description : {product.description}</p>
            </div>
            <div className={styles.button_box}>
                    <button onClick={handleRemoveFromCart}>-</button>
                    <p>{productInCart ? productInCart.quantity : 0}</p>
                    <button onClick={handleAddToCart}>+</button>
                </div>
        </div>
    );
}