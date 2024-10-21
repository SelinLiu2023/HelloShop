
import { useContext } from "react";
import { UserContext } from "../utils/UserContextProvider";
import { MyContext } from "../utils/ContextProvider";
import styles from "../styles/ProductInCartCard.module.scss";


export const ProductInCartCard = ({productId})=>{
    const {getProductById} = useContext(MyContext);
    const {userInfo, userInfoDispatch, getProductInCartById} = useContext(UserContext);

    const product = getProductById(productId);
    const productInCart = getProductInCartById(productId);
    const incrementQuantity = () => {
        userInfoDispatch({ type: 'ADD_PRODUCT_IN_CART', payload:  productInCart  });
    };

    const decrementQuantity = () => {
        userInfoDispatch({ type: 'REMOVE_PRODUCT_FROM_CART', payload: productInCart  });
    };
    return (<div className={styles.product_in_cart}>
        <div className={styles.product_image_and_info}>
            <img src={product.image} />
            <div className={styles.product_info}>
                <p>{product.title}</p>
                <p>Price : {product.price} Euro</p>
            </div>
        </div>
        <div className={styles.button_box}>   
            <button onClick={decrementQuantity}>-</button>
            <p>{productInCart.quantity}</p>
            <button onClick={incrementQuantity} >+</button>
        </div>
    </div>);
};