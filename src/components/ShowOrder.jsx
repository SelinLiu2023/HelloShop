import { useContext, useState } from "react";
import styles from "../styles/ShowOrder.module.scss"
import { UserContext } from "../utils/UserContextProvider";
import { OrderProductsList } from "./OrderProductsList";
import { UserAddress } from "./UserAddress";
import users from "../fakeData/users.json";
import { Delivery } from "./Dilivery";
import { Pay } from "./Pay";
export const ShowOrder = ()=>{
    const {userInfo} = useContext(UserContext);
    const [orderStep, setOrderStep] = useState(0);
    return(
        <div className={styles.show_order}>
        { 
            orderStep === 0 && <OrderProductsList products={userInfo.productsInCart.filter(item=>item.selected === true)} setOrderStep={setOrderStep}/>
        }
        { 
            orderStep === 1 && <UserAddress user={userInfo.user} setOrderStep={setOrderStep}/>
        }
           { 
            orderStep === 2 && <Delivery setOrderStep={setOrderStep}/>
        }
                   { 
            orderStep === 3 && <Pay setOrderStep={setOrderStep}/>
        }

        </div>
    );
};