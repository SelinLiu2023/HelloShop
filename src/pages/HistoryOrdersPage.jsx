import { useContext } from "react";
import { UserContext } from "../utils/UserContextProvider";
import { OrderCard } from "../components/OrderCard";
import styles from "../styles/TraceCurrentOrdersPage.module.scss";
export const HistoryOrdersPage = () => {
    const { userInfo } = useContext(UserContext);
    const isHistoryOrdersEmpty = userInfo.historyOrdersList.length === 0;
    console.log(userInfo.historyOrdersList);
    return (
        <div className={styles.trace_current_orders_page}>
            <h2>Trace History Orders</h2>
            {
                isHistoryOrdersEmpty ?
                <p>You don't have history orders.</p> :
                <div>{
                    userInfo.historyOrdersList.map(order=>(
                        <OrderCard key={order.orderNumber} order={order} isCurrentOrder={false}/>
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