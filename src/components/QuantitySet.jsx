import styles from "../styles/QuantitySet.module.scss";

export const QuantitySet = ({quantity, setQuantity})=>{

    const handleDecrementQuantity = ()=>{
        setQuantity(quantity=>(quantity>0) ? (quantity-1): 0);
    };
    const handleIncrementQuantity = ()=>{
        setQuantity(quantity=>quantity+1);
    };
    const handleInputChange = (e)=>{
        setQuantity(Number(e.target.value));
    };
    return(
        <div className={styles.quantity_set}>
            <button onClick={handleDecrementQuantity}>-</button>
            <input type="number" onChange={handleInputChange} value={quantity.toString()}/>
            <button onClick={handleIncrementQuantity}>+</button>
        </div>
    );
};