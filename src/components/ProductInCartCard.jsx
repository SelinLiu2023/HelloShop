
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/UserContextProvider";
import { MyContext } from "../utils/ContextProvider";
import styles from "../styles/ProductInCartCard.module.scss";


export const ProductInCartCard = ({productId, isInOrder})=>{
    const {getProductById} = useContext(MyContext);
    const {userInfo, userInfoDispatch, getProductInCartById} = useContext(UserContext);
    const [isSelected, setIsSelected] = useState(true);
    const [selectStyle, setSelectStyle] = useState({
        backgroundColor: "white",
    })
    const product = getProductById(productId);
    const productInCart = getProductInCartById(productId);
    const incrementQuantity = () => {
        userInfoDispatch({ type: 'ADD_PRODUCT_TO_CART', payload:  productInCart  });
    };

    const decrementQuantity = () => {
        userInfoDispatch({ type: 'DECREMENT_PRODUCT_IN_CART', payload: productInCart  });
    };
    const handleSelectProductClick = ()=>{
        if(isSelected)  
        userInfoDispatch({type: "UNSELECT_PRODUCT_FROM_ORDER", payload: productId}); 
    else
    userInfoDispatch({type: "SELECT_PRODUCT_TO_ORDER", payload: productId}); 
        setIsSelected(isSelected=>!isSelected);
    };
    useEffect(()=>{
        if(isSelected){
            setSelectStyle({
                backgroundColor: "grey",
            });  
            userInfoDispatch({type: "SELECT_PRODUCT_TO_ORDER", payload: productId});    
   
        }else{
            setSelectStyle({
                backgroundColor: "white",
            });   
            userInfoDispatch({type: "UNSELECT_PRODUCT_FROM_ORDER", payload: productId.id}); 
   
        }

    },[isSelected]);
    // useEffect(()=>{
    //     console.log("productsInOrder:",userInfo.productsInOrder);
    // },[userInfo]);
    const handleDeleteFromCart = ()=>{
        if(product.isSelected){
            userInfoDispatch({type: "UNSELECT_PRODUCT_FROM_ORDER", payload: productId});
        }
       
        userInfoDispatch({type: "REMOVE_PRODUCT_FROM_CART", payload: productId});
    }
    return (
    <div className={styles.product_in_cart_with_select}>
            {!isInOrder && <div className={styles.select} style={selectStyle} onClick={handleSelectProductClick}></div>}

            <div className={styles.product_in_cart}>

                <div className={styles.product_image_and_info}>
                    <img src={product.image} />
                    <div className={styles.product_info}>
                        <p>{product.title}</p>
                        <p>Price : {product.price} Euro</p>
                    </div>
                </div>
                <div className={styles.button_box}>   
                    <button onClick={decrementQuantity} disabled={isInOrder}>-</button>
                    <p>{productInCart.quantity}</p>
                    <button onClick={incrementQuantity} disabled={isInOrder}>+</button>
                </div>
            </div>
            {!isInOrder && <button onClick={handleDeleteFromCart}>delete</button>}
    </div>
    );
};