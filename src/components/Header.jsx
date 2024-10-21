import { NavLink } from "react-router-dom";
import styles  from "../styles/Header.module.scss";
import { useContext } from "react";
import { UserContext } from "../utils/UserContextProvider";
export const Header = ()=>{
    const {userInfo} = useContext(UserContext);
    
    const cartTotalQuantity = userInfo.productsInCart.reduce((a,item)=>item.quantity + a, 0);
    return(
        <nav className={styles.headerNav}>
            <div className={styles.menuBox}>
                <NavLink to="/" className={styles.linkStyle}>Home</NavLink>
                <NavLink to="/products" className={styles.linkStyle}>All Products</NavLink>
                <NavLink to="/about" className={styles.linkStyle}>About</NavLink>
            </div>
            <div className={styles.userCartBox}>
            

                <NavLink className={[styles.userInfoIcon, userInfo.isCartIconFixed ? styles.cart_fixed : styles.cart_not_fixed].join(" ")} to={"/cart"}>
                    {userInfo.productsInCart.length > 0 && <div className={styles.countInCart}>{cartTotalQuantity}</div>}
                🛒
                </NavLink>
                <div to="/user" className={styles.userInfoIcon}>👤</div>
            </div>
        </nav>

    );
};