import { useContext, useState } from "react";
import styles from "../styles/Login.module.scss"
import users from "../fakeData/users.json";
import { UserContext } from "../utils/UserContextProvider";
export const Login = ({close})=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const {userInfoDispatch} = useContext(UserContext);
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
  return (
    <div className={styles.login}>
    <form onSubmit={handleLogin}>
    <label>
        Username:
        <input type="email" onChange={e=>setEmail(e.target.value)} value={email} placeholder="Enter Email"/>
    </label>
    <label>
        Password:
        <input type="password" onChange={e=>setPassword(e.target.value)} value={password} placeholder="Enter Password"/>
    </label>
    <div>
      <button>Registration</button>
      <button type="submit">Log in</button></div>
    </form>
    <p>{loginStatus}</p>
    </div>
  );

};