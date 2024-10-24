import { useContext, useEffect, useState } from "react";
import styles from "../styles/CartPage.module.scss"
import { UserContext } from "../utils/UserContextProvider";
import { ProductInCartCard } from "../components/ProductInCartCard";
import { ShowOrder } from "../components/ShowOrder";
import { Modal } from "../components/Modal";
export const CartPage = ()=>{
    const {userInfo, userInfoDispatch} = useContext(UserContext);
    const [order, setOrder] = useState({
        isShowOrder: false,
        orderNumber:"",
        username: "",
        shippingAddress :{},
        billingAddress : {},
        deliveryMethod : {},
        payMethod : {},
        products : [],
        isFreeDelivery: false,
        totalQuantity : 0,
        totalPrice: 0,
        grandPrice: 0,
        shipptingFee : 3.5,
        minPriceForFreeShipping : 50,
        date: "",
        hour: "",
        minute: "",
    });
    const isCartEmpty = userInfo.productsInCart.length === 0 ? true : false;

  
    useEffect(()=>{
        console.log(userInfo)
    },[userInfo]);
    useEffect(()=>{
        const totalPrice = userInfo.productsInCart.filter(item=>item.selected === true).reduce((a, item)=> a + item.price * item.quantity, 0);
        const freeDelivery = (totalPrice >= order.minPriceForFreeShipping) ?
                                true:
                                false;
        setOrder({
            ...order,
            totalPrice: totalPrice,
            isFreeDelivery: freeDelivery,
            totalQuantity: userInfo.productsInCart.filter(item=>item.selected === true).reduce((a, item)=> a + item.quantity, 0),
            grandPrice: freeDelivery ? totalPrice : (totalPrice + order.shipptingFee),
            products:userInfo.productsInCart.filter(item=>item.selected === true)
        });
        },[userInfo.productsInCart]);

    const handlePurchase = ()=>{
            setOrder({
            ...order,
            isShowOrder: true,
        });
    };

    const closeShowOrder = ()=>{
        setOrder({
            ...order,
            isShowOrder: false,
        });
    };
    const ProductsInCartList = userInfo.productsInCart.map(item=>{
        return (
            <div key={item.id}>
                <ProductInCartCard 
                    productId={item.id} 
                    isInOrder={false}
                />
            </div>
        );
    });

    const PurchaseButtons = () => {
        const handleLogin =()=>{
            userInfoDispatch({type: "TOGGLE_INFO_MODAL"});
        }
        return (
            <div>
                <p>Total Quantity : <span className={styles.highlight}>{order.totalQuantity}</span ></p>

                <p>Total Price : <span className={styles.highlight}>{order.totalPrice.toFixed(2)}</span> Euro</p>

                {!order.isFreeDelivery && <p style={{color: "grey",fontStyle: "italic" }}>Free shipping on orders over €50.</p>}

                {!order.isFreeDelivery && <p >Shipping Fee : <span className={styles.highlight}>{order.shipptingFee} </span >Euro</p>}

                <p >Grand Total Price : <span className={styles.highlight}>{(order.grandPrice).toFixed(2)} </span >Euro</p> 

                <div className={styles.button_box}>
                { 
                    !userInfo.isLogedin ?   
                    <div>   
                        <button onClick={handleLogin}>Login to Purchase</button>
                        <button>Purchase as Guest</button> 
                    </div>   :
                    <button onClick={handlePurchase}>Purchase</button>
                }
                </div>
            </div>
        );
    };

    return(
        <div className={styles.cart_page}>
            <h2>Dear {userInfo.user === null ?
                        "Customer" :
                        userInfo.user.username} :</h2>
            {          
                isCartEmpty ? 
                <p>Your shopping cart is empty.</p> :
                ProductsInCartList
            }
            {          
                !isCartEmpty && 
                < PurchaseButtons />
            }
            <Modal isOpen={order.isShowOrder} close={closeShowOrder}>
                <ShowOrder order={order} setOrder={setOrder}/>
            </Modal>
        </div>
    );

};