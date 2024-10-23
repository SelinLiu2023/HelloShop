import {  ProductInCartCard } from "./ProductInCartCard";
import styles from "../styles/ShowOrder.module.scss";

export const OrderProductsList = ({products, setOrderStep})=>{
    const handleStepNext = ()=>{
        setOrderStep(step=> step + 1);
    };
    return(
        <div className={styles.container_order}>
        {    
            products.map(item=>{
                return (
                    <div>
                        <div>
                            <ProductInCartCard productId={item.id} isInOrder={true} />

                        </div>

                    </div>
                );
            })
        }
            <div className={styles.buttons_box}>
                <button className={styles.button} onClick={handleStepNext}>Next</button>
            </div>
        </div>
    );
};