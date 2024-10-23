import { UserAddress } from "./UserAddress";
import styles from "../styles/ShowOrder.module.scss";
import { useContext } from "react";
import { UserContext } from "../utils/UserContextProvider";

export const SuccessOrder = ({order, setOrder})=>{
    const {userInfoDispatch} = useContext(UserContext);
    console.log("SuccessOrder", order);
    const handleCloseOrder =()=>{
        userInfoDispatch({type: "CLEAR_ORDER", payload: order});
        setOrder({
            ...order,
            isShowOrder: false,
        });
    }
    return(
        <div>
            <p>Dear {order.username || "Customer"} ,</p>
            <p>You have successfully purchased our product. Detailed information will be sent to you via email. Thank you very much!</p>
            <p>Date : {order.date} {order.hour}:{order.minute}</p>
            <div>
                <p>Shipping Address :</p>
                <div>
                    <span>Name : </span>
                    <span>{order.shippingAddress.name}</span>
                </div>
                <div>
                    <span>Street : </span>
                    <span>{order.shippingAddress.street}</span>
                </div>
                <div>
                    <span>Postal Code : </span>
                    <span>{order.shippingAddress.postalCode}</span>
                </div>
                <div>
                    <span>City : </span>
                    <span>{order.shippingAddress.city}</span>
                </div>
            </div>
            <div>
                <p>Billing Address :</p>
                <div>
                    <span>Name : </span>
                    <span>{order.billingAddress.name}</span>
                </div>
                <div>
                    <span>Street : </span>
                    <span>{order.billingAddress.street}</span>
                </div>
                <div>
                    <span>Postal Code : </span>
                    <span>{order.billingAddress.postalCode}</span>
                </div>
                <div>
                    <span>City : </span>
                    <span>{order.billingAddress.city}</span>
                </div>
            </div>
            <div>
                <span>Delivery through : {order.deliveryMethod.name}</span>
                <span></span>
            </div>

            <div>
                <span>Pay through : {order.payMethod.name}</span>
                <span></span>
            </div>
            <div className={styles.buttons_box}>
                <button className={styles.button} onClick={handleCloseOrder}>Close</button>
            </div>
        </div>
    );
};