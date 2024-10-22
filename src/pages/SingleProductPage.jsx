import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../utils/ContextProvider";
import { UserContext } from "../utils/UserContextProvider";
import styles from "../styles/SingleProductPage.module.scss";
// lectronics"
// description
// : 
// "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system"
// id
// : 
// 9
// image
// : 
// "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
// price
// : 
// 64
// rating
// : 
// {rate: 3.3, count: 203}
// title
// : 
// "WD 2TB Elements Portable External Hard Drive - USB 3
export const SingleProductPage = ()=>{
    const {id} = useParams();
    const {getProductById} = useContext(MyContext);
    const product = getProductById(id);
    console.log("product", product);
    const {userInfoDispatch, getProductInCartById} = useContext(UserContext);
    const productInCart = getProductInCartById(id);

    const handleAddToCart = ()=>{
        userInfoDispatch({type: "ADD_PRODUCT_IN_CART", 
                            payload: product});
    };
    const handleRemoveFromCart = ()=>{
            userInfoDispatch({type: "REMOVE_PRODUCT_FROM_CART", 
                        payload: product});
    };
    useEffect(()=>{
        userInfoDispatch({type: "SET_CARTICON_FIXED"});
        return ()=>{
            userInfoDispatch({type: "SET_CARTICON_NOT_FIXED"});
        }
    }),[];
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