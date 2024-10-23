import styles from "../styles/ShowOrder.module.scss";
import { useState } from "react";
const shippingOptions = [
    { id: 'dhlStandard', name: 'DHL Standard', cost: '0€', deliveryTime: '2-3 days' },
    { id: 'dhlPrime', name: 'DHL Prime', cost: '7€', deliveryTime: '1 days' },
    { id: 'hermes', name: 'Hermes', cost: '5€', deliveryTime: '3-5 days' }
  ];
export const Delivery = ({order, setOrderStep,setOrder})=>{
 // 使用 React 的 useState 钩子来跟踪当前选择的快递方式
 const [selectedOption, setSelectedOption] = useState(shippingOptions[0].id);
 // 处理单选按钮变更
 const handleOptionChange = (event) => {
   setSelectedOption(event.target.value);
 };
    const handlePreviousStep = ()=>{
        setOrderStep(step => step - 1);
    };
    const handleNextStep = ()=>{
        setOrderStep(step => step + 1);
        setOrder({
          ...order,
          // deliveryMethod:shippingOptions[selectedOption],
          deliveryMethod:shippingOptions.find(item=>item.id === selectedOption),
      });
    };
    return(
        <div className={styles.container_order}>
                  <p>Choose your shipping method:</p>
      {shippingOptions.map(option => (
        <label key={option.id}>
          <input
            type="radio"
            name="shipping"
            value={option.id}
            checked={selectedOption === option.id}
            onChange={handleOptionChange}
          />
          {option.name} - {option.cost} - {option.deliveryTime}
        </label>
      ))}
                 <div className={styles.buttons_box}>
                    <button className={styles.button}onClick={handlePreviousStep}>Prev</button>                    
                    <button className={styles.button}onClick={handleNextStep}>Next</button>
                </div>
        </div>
    );
}