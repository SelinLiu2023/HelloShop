import { useContext, useState } from "react";
import styles from "../styles/Login.module.scss"
import users from "../fakeData/users.json";
import { UserContext } from "../utils/UserContextProvider";
import { useNavigate } from "react-router-dom";
import { LabelPassword } from "./LabelPassword";
export const Login = ({close})=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const {userInfoDispatch} = useContext(UserContext);
  const navigator = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.users.find(u => u.email === email && u.password === password);
    if (user) {
      // setLoginStatus(`Hello, ${user.name}!`);
      userInfoDispatch({type: "SET_ACCOUNT", payload: user});
      close();
    } else {
      setLoginStatus('Failed to login: Incorrect email or password.');
    }
  };
  const handleRegistrationClick = ()=>{
    navigator("/signup");
    close();
  };
  return (
    <div className={styles.login}>
    <form onSubmit={handleLogin}>
    <label>
        Username:
        <input type="email" onChange={e=>setEmail(e.target.value)} value={email} placeholder="Enter Email"/>
    </label>
    <LabelPassword text="Password :"
                    placeholderText="Enter Password"
                    isDisable = {false}
                    password = {password}
                    setPassword = {setPassword}
    />
    {/* <label>
        Password:
        <input type="password" onChange={e=>setPassword(e.target.value)} value={password} placeholder="Enter Password"/>
    </label> */}
    <div>
      <button onClick={handleRegistrationClick}>Sign Up</button>
      <button type="submit">Log in</button></div>
    </form>
    <p>{loginStatus}</p>
    </div>
  );

};