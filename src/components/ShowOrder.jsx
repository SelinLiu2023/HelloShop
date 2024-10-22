import { useContext, useState } from "react";
import styles from "../styles/ShowOrder.module.scss"
import { UserContext } from "../utils/UserContextProvider";
import { OrderProductsList } from "./OrderProductsList";
export const ShowOrder = ()=>{
    const {useInfo} = useContext(UserContext);
    return(
        <div className={styles.show_order}>
            <OrderProductsList productsInOrder={useInfo.productsInOrder}/>

        </div>
    );
};