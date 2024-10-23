import { useContext, useEffect, useState } from "react";
import styles from "../styles/ShowOrder.module.scss"
import { UserContext } from "../utils/UserContextProvider";
import { OrderProductsList } from "./OrderProductsList";
import { UserAddress } from "./UserAddress";
import users from "../fakeData/users.json";
import { Delivery } from "./Dilivery";
import { Pay } from "./Pay";
import { SuccessOrder } from "./SuccessOrder";
export const ShowOrder = ({order, setOrder})=>{
    const {userInfo} = useContext(UserContext);
    const [orderStep, setOrderStep] = useState(0);
    async function generateOrderNumber(username) {
        const encoder = new TextEncoder();
        const data = encoder.encode(username + new Date().getTime());
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer)); // 转换为字节
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // 转换为十六进制
        // order.orderNumber = hashHex;
        return hashHex;
    }
    useEffect(()=>{
        setOrder({
            ...order,
            username: userInfo.user.username,
            orderNumber: generateOrderNumber(userInfo.user.email),
        }

        )
    },[]);
    // generateOrderNumber(userInfo.user.email).then(console.log);

    return(
        <div className={styles.show_order}>
        { 
            orderStep === 0 && <OrderProductsList products={userInfo.productsInCart.filter(item=>item.selected === true)} setOrderStep={setOrderStep} order={order} setOrder ={setOrder}/>
        }
        { 
            orderStep === 1 && <UserAddress user={userInfo.user} setOrderStep={setOrderStep} order = {order} setOrder ={setOrder}/>
        }
        { 
            orderStep === 2 && <Delivery setOrderStep={setOrderStep} order = {order} setOrder ={setOrder}/>
        }
        { 
            orderStep === 3 && <Pay setOrderStep={setOrderStep} order = {order} setOrder ={setOrder}/>
        }
        { 
            orderStep === 4 && <SuccessOrder order = {order} setOrder ={setOrder}/>
        }
        

        </div>
    );
};
