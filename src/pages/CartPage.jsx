import { useContext, useEffect, useState } from "react";
import styles from "../styles/CartPage.module.scss"
import { UserContext } from "../utils/UserContextProvider";
import { ProductInCartCard } from "../components/ProductInCartCard";
export const CartPage = ()=>{
    const {userInfo, userInfoDispatch} = useContext(UserContext);
    const [isDeliveryFree, setIsDeliveryFree] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const shipptingFee = 3.5;
    useEffect(()=>{
        setTotalPrice(userInfo.productsInCart.reduce((a, item)=> a + item.price * item.quantity, 0));
        console.log("totalprice",userInfo.productsInCart.reduce((a, item)=> a + item.price * item.quantity, 0));
        },[userInfo.productsInCart]);
    useEffect(()=>{
            if(totalPrice >= 50){
                setIsDeliveryFree(true);
            }else{
                setIsDeliveryFree(false);
            }
        }, [totalPrice]);
    useEffect(()=>{
        userInfoDispatch({type: "SET_CARTICON_NOT_FIXED"});
        return ()=>userInfoDispatch({type: "SET_CARTICON_FIXED"});
    }
    ,[]);
    console.log(userInfo);
    const isCartEmpty = userInfo.productsInCart.length === 0 ? true : false;
    const amountPrice = userInfo.productsInCart.reduce((a, item)=> a + item.price * item.quantity, 0);
    const productsInCartList = userInfo.productsInCart.map(item=>{
        return (
            <div>
                <div>
                    <ProductInCartCard productId={item.id}/>
       
                </div>
 
            </div>
        );
    });
    const PurchaseButtons = () => {
        return (
            <div>
            <p>Total Quantity : <span className={styles.highlight}>{userInfo.productsInCart.length}</span ></p>
            <p>Total Price : <span className={styles.highlight}>{amountPrice.toFixed(2)}</span> Euro</p>
            {!isDeliveryFree && <p style={{color: "grey",fontStyle: "italic" }}>Free shipping on orders over €50.</p>}
            {!isDeliveryFree && <p >Shipping Fee : <span className={styles.highlight}>{shipptingFee} </span >Euro</p>}
            {!isDeliveryFree ?
                <p >Grand Total Price : <span className={styles.highlight}>{(shipptingFee + totalPrice).toFixed(2)} </span >Euro</p> :
                <p>Grand Total Price : <span className={styles.highlight}>{totalPrice.toFixed(2)} </span >Euro</p>}
          <div className={styles.button_box}>
            <button>Login to Purchase</button>
            <button>Purchase as Guest</button>
          </div>
          </div>
        );
      };
    return(
        <div className={styles.cart_page}>
            <h2>Dear {userInfo.user === null ?
                        "Gast" :
                        userInfo.user.username} :</h2>
            {          
                isCartEmpty ? 
                <p>Your shopping cart is empty.</p> :
                productsInCartList
            }
            {          
                !isCartEmpty && 
                < PurchaseButtons />
            }
        </div>
    );

};