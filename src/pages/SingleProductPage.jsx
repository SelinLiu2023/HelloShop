import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../utils/ContextProvider";
import { UserContext } from "../utils/UserContextProvider";
import styles from "../styles/SingleProductPage.module.scss";
import { ProductsJsonContext } from "../utils/ProductsJsonContext";
import { QuantitySet } from "../components/QuantitySet";

export const SingleProductPage = ()=>{
    const {id} = useParams();
    const {getProductById} = useContext(ProductsJsonContext);
    const {userInfo, userInfoDispatch} = useContext(UserContext);
    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();
    const product = getProductById(id);

    // const productInCart = getProductInCartById(id);
    const productToAdd = {...product, 
                    quantity: quantity};
    console.log("SingleProductPage product",productToAdd.quantity);
    useEffect(()=>{
        console.log(userInfo.productsInCart)
    },[userInfo])
    const handleAddToCart = ()=>{
        if(quantity <= 0) return;
        userInfoDispatch({type: "ADD_PRODUCT_TO_CART", 
                            payload: {...productToAdd, 
                                    quantity: quantity}});
        navigate(-1);
    };
    // const handleDecrementQuantity = ()=>{
    //     setQuantity(quantity=>(quantity>0) ? (quantity-1): 0);
    // };
    // const handleIncrementQuantity = ()=>{
    //     setQuantity(quantity=>quantity+1);
    // };
    // const handleInputChange = (e)=>{
    //     setQuantity(Number(e.target.value));
    // };
    return (

        <div className={styles.single_product_page}>
            <h2>{product.title}</h2>
            <img src={product.image} />
            <div className={styles.product_info}>
                <p>Price : {product.price} Euro</p>
                <p>rate: {product.rating.rate}</p>
                <p>Product Description : {product.description}</p>
            </div>
            {/* <div className={styles.button_box}>
                    <button onClick={handleDecrementQuantity}>-</button>
                    <input type="number" onChange={handleInputChange} value={quantity.toString()}/>
                    <button onClick={handleIncrementQuantity}>+</button>
            </div> */}
            <QuantitySet quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={handleAddToCart}>Add to Basket</button>
        </div>
    );
};