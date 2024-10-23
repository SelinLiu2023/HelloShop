import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/UserContextProvider";
import styles from "../styles/ShowOrder.module.scss";

export const UserAddress = ({ user, setOrderStep, order, setOrder})=>{
    const [isDisabled, setIsDisabled] = useState(true);
    const [inputUser, setInputUser] = useState(user);
    const [buttonChangeToSave, setButtonChangeToSave] = useState(false);
    const {userInfoDispatch} = useContext(UserContext);
    const handleEditClick = ()=>{
            setIsDisabled(false);
            setButtonChangeToSave(true);
    };
    const handleInputChange = (e)=>{
        const [addressType, address] = e.target.name.split("_");
        setInputUser(inputUser=>({
            ...inputUser,
            [addressType]:{
                ...inputUser[addressType],
                [address]: e.target.value,
            }
        }));
    };

    const handlePreviousStep = ()=>{
        setOrderStep(step => step - 1);
    };

    const handleNextStep = ()=>{
        setOrderStep(step => step + 1);
        setOrder({
            ...order,
            shippingAddress:{
                ...inputUser.shippingAddress,
            },
            billingAddress:{
                ...inputUser.billingAddress
            },
        });
    };
    const handleSaveClick = ()=>{
        userInfoDispatch({type: "SET_ACCOUNT", payload: {...inputUser}});
    };

    return(
        <div className={styles.container_order}>
            <div>
                <p>Shipping Address :</p>
                <label htmlFor="shippingAddress_name">Name :
                    <input name="shippingAddress_name"
                            type="text"
                            value = {inputUser.shippingAddress.name}
                            onChange = {handleInputChange}

                            disabled={isDisabled} />
                </label>
                <label htmlFor="shippingAddress_street">Street :
                    <input name="shippingAddress_street"
                            type="text"
                            value = {inputUser.shippingAddress.street}
                            onChange = {handleInputChange}

                            disabled={isDisabled} />
                </label>
                <label htmlFor="shippingAddress_postalCode">Postal Code :
                    <input name="shippingAddress_postalCode"
                            type="number"
                            minLength="5"
                            maxLength="5"
                            value = {inputUser.shippingAddress.postalCode}
                            onChange = {handleInputChange}

                            disabled={isDisabled} />
                </label>
                <label htmlFor="shippingAddress_city">City :
                    <input name="shippingAddress_city"
                            type="text"
                            value = {inputUser.shippingAddress.city}
                            onChange = {handleInputChange}

                            disabled={isDisabled} />
                </label>
                <label htmlFor="shippingAddress_country">Country :
                    <input name="shippingAddress_country"
                            type="text"
                            placeholder= "Germany"
                            disabled={true} />
                </label>
            </div>
            <div>
                <p>Billing Address :</p>
                <label htmlFor="billingAddress_name">Name :
                    <input name="billingAddress_name"
                            type="text"
                            value = {inputUser.billingAddress.name}
                            onChange = {handleInputChange}

                            disabled={isDisabled} />
                </label>
                <label htmlFor="billingAddress_street">Street :
                    <input name="billingAddress_street"
                            type="text"
                            value = {inputUser.billingAddress.street}
                            onChange = {handleInputChange}
                            disabled={isDisabled} />
                </label>
                <label htmlFor="billingAddress_postalCode">Postal Code :
                    <input name="billingAddress_postalCode"
                            type="number"
                            minLength="5"
                            maxLength="5"
                            value = {inputUser.billingAddress.postalCode}
                            onChange = {handleInputChange}
                            disabled={isDisabled} />
                </label>
                <label htmlFor="billingAddress_city">City :
                    <input name="billingAddress_city"
                            type="text"
                            value = {inputUser.billingAddress.city}
                            disabled={isDisabled} />
                </label>
                <label htmlFor="billingAddress_country">Country :
                    <input name="billingAddress_country"
                            type="text"
                            placeholder= "Germany"
                            disabled={true} />
                </label>
            </div>
            <div className={styles.buttons_box}>
                <button className={styles.button}onClick={handlePreviousStep}>Prev</button>                    {
                    buttonChangeToSave ?
                    <button onClick={handleSaveClick} className={styles.button}>Save</button > :
                    <button  onClick={handleEditClick}  className={styles.button}>Edit</button>
                }
                <button className={styles.button}onClick={handleNextStep}>Next</button>
            </div>
        </div>
    );
};