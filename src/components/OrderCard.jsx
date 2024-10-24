import { useContext, useEffect } from "react";
import styles from "../styles/TraceCurrentOrdersPage.module.scss";
import { UserContext } from "../utils/UserContextProvider";
export const OrderCard = ({order, isCurrentOrder})=>{
    const {userInfo, userInfoDispatch} = useContext(UserContext);
    const handleConfirmOrder = ()=>{
        userInfoDispatch({type : "ORDER_CONFIRMED", payload: order});
    };
    useEffect(()=>{
        console.log("TraceCurrentOrdersPage", userInfo);
    },[userInfo]);
    return(
        <div className={styles.order_card}>
            <img src={order.products[0].image} />
            <div>
                <p>Order Number: {order.orderNumber}</p>
                <p>Date : {order.date} {order.hour}:{order.minute}</p>
            </div>
            {isCurrentOrder && <button onClick={handleConfirmOrder}>Confirm</button>}
        </div>
    );
};