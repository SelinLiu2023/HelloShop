import { useContext } from "react";
import { UserContext } from "../utils/UserContextProvider";
import { OrderCard } from "../components/OrderCard";
import styles from "../styles/TraceCurrentOrdersPage.module.scss";
export const TraceCurrentOrdersPage = () => {
    const { userInfo } = useContext(UserContext);
    const isCurrentOrdersEmpty = userInfo.ordersList.length === 0;
    console.log(userInfo.ordersList);
    return (
        <div className={styles.trace_current_orders_page}>
            <h2>Trace Orders</h2>
            {
                isCurrentOrdersEmpty ?
                <p>You don't have unclosed order.</p> :
                <div>{
                    userInfo.ordersList.map(order=>(
                        <OrderCard key={order.orderNumber} order={order} isCurrentOrder={true}/>
                    ))
                     }</div>
                // (<div>
                //     {
                //         userInfo.ordersList.map(order =>(
                //             <p>{order.orderNumber}</p>
                //             // <OrderCard key={order.orderNumber} order={order}/>
                //         ))
                //     }
                // </div>)
            }
  
        </div>
    );
};