import styles from "../styles/ShowOrder.module.scss";
import { useState } from "react";
const paymentMethods = [
    { id: 'paypal', name: 'PayPal', description: 'Pay using your PayPal account.' },
    { id: 'credit_card', name: 'Credit Card', description: 'Pay with your credit card.' },
    
    { id: 'klarna', name: 'Klarna', description: 'Pay later or in installments with Klarna.' }
];
export const Pay = ({order, setOrderStep, setOrder})=>{
 // 使用 React 的 useState 钩子来跟踪当前选择的快递方式
 const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(paymentMethods[0].id);
 const currentDate = new Date();
 const year = currentDate.getFullYear();
 const month = currentDate.getMonth() + 1;
 const day = currentDate.getDate();
 const hour = currentDate.getHours();
 const minutes = currentDate.getMinutes();
 console.log("Pay",order);
 // 处理单选按钮变更
 const handlePaymentChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
};
    const handlePreviousStep = ()=>{
        setOrderStep(step => step - 1);
    };
    const handleNextStep = ()=>{
        console.log("selectedPaymentMethod", selectedPaymentMethod);
        console.log("paymentMethods.find(item=>item.id === setSelectedPaymentMethod)", paymentMethods.find(item=>item.id === selectedPaymentMethod))
        setOrderStep(step => step + 1);
        setOrder({
            ...order,
            payMethod:paymentMethods.find(item=>item.id === selectedPaymentMethod),
            date: `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
            hour: `${hour.toString().padStart(2, '0')}`,
            minute: `${minutes.toString().padStart(2, '0')}`
            });
            
    };
    return(
        <div className={styles.container_order}>
                  <div>
                      <p>Choose your payment method:</p>
                      {paymentMethods.map(method => (
                                      <label key={method.id}>
                        <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={selectedPaymentMethod === method.id}
                            onChange={handlePaymentChange}
                        />
                        {method.name} - {method.description}
                                      </label>
                                  ))}
                  </div>
                 <div className={styles.buttons_box}>
                    <button className={styles.button}onClick={handlePreviousStep}>Prev</button>                    
                    <button className={styles.button}onClick={handleNextStep}>Pay</button>
                </div>
        </div>
    );
}