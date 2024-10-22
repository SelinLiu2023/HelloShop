import { NavLink } from "react-router-dom";
import styles  from "../styles/Header.module.scss";
import { useContext , useEffect, useState} from "react";
import { UserContext } from "../utils/UserContextProvider";
import { Modal } from "../components/Modal";
import { Login } from "./Login";
import { DropdownMenu } from "./DropdownMenu";
export const Header = ()=>{
    const {userInfo, userInfoDispatch} = useContext(UserContext);
    const [isDropdownMenuOpen, setDropdownMenuOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const toggleModal = () => userInfoDispatch({type: "TOGGLE_INFO_MODAL"});
    const toggleDropdownMenu = () => setDropdownMenuOpen(!isDropdownMenuOpen);
    const cartTotalQuantity = userInfo.productsInCart.reduce((a,item)=>item.quantity + a, 0);
    const handleUserIconClick = ()=>{
        if(!userInfo.isLogedin){
            toggleModal();
        }else{
          
            toggleDropdownMenu();
        }
    };
    useEffect(()=>{
        console.log(isDropdownMenuOpen);
    },[isDropdownMenuOpen]);
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

                <div to="/user" className={[styles.userInfoIcon, styles.userIcon].join(" ")} onClick={handleUserIconClick}>{userInfo.isLogedin === false ? 
                <>&#128100;</> : 
                <img src={userInfo.user.avatarUrl}/>}
                </div>
                <DropdownMenu isOpen={isDropdownMenuOpen}  close={toggleDropdownMenu}/>
                <Modal isOpen={userInfo.isLoginModalOpen} close={toggleModal}>
                    <Login close={toggleModal}/>
                </Modal>
            </div>
        </nav>

    );
};