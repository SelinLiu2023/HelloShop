import { useState } from "react";

export const UserAddress = ({ user})=>{
    const [isDisabled, setIsDisabled] = useState(true);
    const [inputUser, setInputUser] = useState(user);
    const [buttonChangeToSave, setButtonChangeToSave] = useState(false);
    const handleEditClick = ()=>{
            setIsDisabled(false);
            setButtonChangeToSave(true);
    };
    const handleInputChange = (e)=>{
        const [addressType, address] = e.target.name.split("_");
        setInputUser(inputUser=>({
            ...inputUser,
            [addressType]:{
                ...[addressType],
                [address]: e.target.value,
            }
        }));
    };
    const handleSaveClick = ()=>{

    };
    const handleSubmit = (e)=>{
        e.preventDefault();
    };
        return(
            <div>
                <form onSubmit={handleSubmit}>
                <div>
                    <p>Shipping Address :</p>
                    <label for="shippingAddress_name">Name :
                        <input name="shippingAddress_name"
                                type="text"
                                value = {inputUser.shippingAddress.name}
                                onChange = {handleInputChange}

                                disabled={isDisabled} />
                    </label>
                    <label for="shippingAddress_street">Street :
                        <input name="shippingAddress_street"
                                type="text"
                                value = {inputUser.shippingAddress.street}
                                onChange = {handleInputChange}

                                disabled={isDisabled} />
                    </label>
                    <label for="shippingAddress_postalCode">Postal Code :
                        <input name="shippingAddress_postalCode"
                                type="number"
                                minLength="5"
                                maxLength="5"
                                value = {inputUser.shippingAddress.postalCode}
                                onChange = {handleInputChange}

                                disabled={isDisabled} />
                    </label>
                    <label for="shippingAddress_city">City :
                        <input name="shippingAddress_city"
                                type="text"
                                value = {inputUser.shippingAddress.city}
                                onChange = {handleInputChange}

                                disabled={isDisabled} />
                    </label>
                    <label for="shippingAddress_country">Country :
                        <input name="shippingAddress_country"
                                type="text"
                                placeholder= "Germany"
                                disabled={true} />
                    </label>
                </div>
                <div>
                    <p>Billing Address :</p>
                    <label for="billingAddress_name">Name :
                        <input name="billingAddress_name"
                                type="text"
                                value = {inputUser.shippingAddress.name}
                                onChange = {handleInputChange}

                                disabled={isDisabled} />
                    </label>
                    <label for="billingAddress_street">Street :
                        <input name="billingAddress_street"
                                type="text"
                                value = {inputUser.billingAddress.street}
                                onChange = {handleInputChange}
                                disabled={isDisabled} />
                    </label>
                    <label for="billingAddress_postalCode">Postal Code :
                        <input name="billingAddress_postalCode"
                                type="number"
                                minLength="5"
                                maxLength="5"
                                value = {inputUser.billingAddress.postalCode}
                                onChange = {handleInputChange}
                                disabled={isDisabled} />
                    </label>
                    <label for="billingAddress_city">City :
                        <input name="billingAddress_city"
                                type="text"
                                value = {inputUser.billingAddress.city}
                                disabled={isDisabled} />
                    </label>
                    <label for="billingAddress_country">Country :
                        <input name="billingAddress_country"
                                type="text"
                                placeholder= "Germany"
                                disabled={true} />
                    </label>
                </div>
                {
                    buttonChangeToSave ?
                    <button type="button" onClick={handleSaveClick}>Save</button> :
                    <button type="button" onClick={handleEditClick}>Edit</button>
                }
                <button type="submit">Submit</button>
                </form>
            </div>
        );
};