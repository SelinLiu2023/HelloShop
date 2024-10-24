import { useEffect, useState } from "react";
import { LabelPassword } from "../components/LabelPassword";

export const SignUpPage = ()=>{
    // const [usernameAndPassword, setUsernameAndPassword] = useState({
    //     username: "",
    //     password: "",
    //     rePassword: "",
    // });
    // const [isDisable, setIsDisable] = useState(!isEdible);
    const [errorMessage, setIsErrorMessage] = useState("");
    // const [showPassword, setShowPassword] = useState(false);
    // const [showRePassword, setShowRePassword] = useState(false);
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [userAccount, setUserAccount] = useState("");
    const [isSuccesfulSignUp, setIsSuccesfulSignUp] = useState(false);
    const handleInputChange = (e)=>{
        setUserAccount(e.currentTarget.value);
    };
    useEffect(()=>{
        setIsSuccesfulSignUp(false);
    },[]);
    const handleSignUpClick =(e)=>{
        e.preventDefault();
        if(password !== rePassword){
            setRePassword("You need to enter same passwords.")
        }else{
            setIsSuccesfulSignUp(true);
        }
    };
 
    // useEffect(()=>{
    //     console.log("showPasswords", showPassword)
    // },[showPassword]);
    return(
        <div>
{  !isSuccesfulSignUp?      
        <form  onSubmit={handleSignUpClick}>
            {/* {!isRegistration &&
                (isDisable?
                <button onClick={handleEditClick}>Edit</button>:
                <button onClick={handleSaveClick}>Save</button>)
            }
            <label htmlFor="username">Username :
                <input name="username" 
                    type="email"
                    value={isRegistration?
                        usernameAndPassword.username:
                        user.username} 
                    disabled={isDisable}
                    placeholder={isRegistration?"Your Email address" :""}
                    required
                    onChange={handleInputChange}/>
            </label>
            <label htmlFor="password">Password :
                <input name="password" 
                type= {showPassword?"text":"password"}
                value={isRegistration?
                    usernameAndPassword.password:
                    user.password} 
                disabled={isDisable}
                placeholder={isRegistration?"At least 8 characters long" :""}
                required
                minLength="8"
                onChange={handleInputChange}/>
                <button type="button" 
                        onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword?
                    faEye : faEyeSlash}/>
                </button>
            </label>  
            {(isRegistration || isDisable) && 
            <label htmlFor="rePassword">Password :
                <input name="rePassword" 
                type={showRePassword?"text":"password"}
                value={isRegistration?
                    usernameAndPassword.rePassword:
                    user.password} 
                disabled={isDisable}
                placeholder={isRegistration?"Reenter your password" :""}
                required
                minLength="8"
                onChange={handleInputChange}/>
                <button type="button" 
                        onClick={toggleRePasswordVisibility}>
                <FontAwesomeIcon icon={showRePassword ? faEye : faEyeSlash}/>
                </button>
            </label>}     */}
            <label htmlFor="userAccount">Email :
                <input name="userAccount" 
                    type="email"
                    value={userAccount} 
                    placeholder="Your Email address"
                    required
                    onChange={handleInputChange}/>
            </label>
            <LabelPassword placeholderText = {"At least 8 characters long"}
                            text="Password :"
                            isDisable = {false}
                            setPassword={setPassword}
                            password={password}/>
            <LabelPassword placeholderText = {"Reenter your password"}
                            text="Password :"
                            isDisable = {false}
                            setPassword={setRePassword}
                            password={rePassword}/>
            <button type="submit">Sign Up</button>
            
        </form>:
        <p>Successfully Signed Up</p>
}        <p>{errorMessage}</p>
        </div>
    );

};