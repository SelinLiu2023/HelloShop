
import { useContext } from "react";
import styles  from "../styles/ProductCard.module.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/UserContextProvider";

export const ProductCard = ({product})=>{
    const {id, title, price, image} = product;
    const navigate =useNavigate();
    const {userInfoDispatch, getProductInCartById} = useContext(UserContext);
    const productInCart = getProductInCartById(id);
    const handleClick = () => {
        navigate(`/products/${id}`);
    };
    const handleAddToCart = ()=>{
        userInfoDispatch({type: "ADD_PRODUCT_IN_CART", 
                            payload: product});
                            
    };
    const handleRemoveFromCart = ()=>{
            userInfoDispatch({type: "REMOVE_PRODUCT_FROM_CART", 
                        payload: product});
    }
    return (
        // <Link  to={`/products/${id}`}>
            <div className={styles.productCard}>
                <div><img src={image} onClick={handleClick}/></div>
                <div className={styles.productInfo}>
                    <h2 onClick={handleClick}>{title}</h2>
                    
                    <p>Price: {price} Euro</p>
                </div>
                {/* <div className={styles.add_to_cart} onClick={handleAddToCart}>Add to Cart</div> */}
                <div className={styles.button_box}>
                    <button onClick={handleRemoveFromCart}>-</button>
                    <p>{productInCart ? productInCart.quantity : 0}</p>
                    <button onClick={handleAddToCart}>+</button>
                </div>
            </div>

        // </Link>
    );
}