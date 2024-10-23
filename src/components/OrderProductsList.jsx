import {  ProductInCartCard } from "./ProductInCartCard";
import styles from "../styles/ShowOrder.module.scss";

export const OrderProductsList = ({products, setOrderStep, order, setOrder})=>{
    const handleStepNext = ()=>{
        setOrderStep(step=> step + 1);
    };

    console.log("order in OrderProductsList", order);

    return(
        <div className={styles.container_order}>
            {    
                products.map(item=>{
                    return (
                        <div key={item.id}>
                            <div>
                                <ProductInCartCard productId={item.id} isInOrder={true} />

                            </div>

                        </div>
                    );
                })
            }
            
            <p>Total Quantity : <span className={styles.highlight}>{order.totalQuantity}</span ></p>

            <p>Total Price : <span className={styles.highlight}>{order.totalPrice.toFixed(2)}</span> Euro</p>

            {!order.isFreeDelivery && <p style={{color: "grey",fontStyle: "italic" }}>Free shipping on orders over €50.</p>}

            {!order.isFreeDelivery && <p >Shipping Fee : <span className={styles.highlight}>{order.shipptingFee} </span >Euro</p>}

            <p >Grand Total Price : <span className={styles.highlight}>{(order.grandPrice).toFixed(2)} </span >Euro</p> 

            <div className={styles.buttons_box}>
                <button className={styles.button} onClick={handleStepNext}>Next</button>
            </div>
        </div>
    );
};