import { useContext, useRef, useEffect } from "react";
import styles from "../styles/DropdownMenu.module.scss";
import { UserContext } from "../utils/UserContextProvider";
import { NavLink } from "react-router-dom";

export const DropdownMenu = ({isOpen, close})=>{
    if(!isOpen) return null;
    const menuRef = useRef(null); // 创建 ref 来引用菜单 DOM 节点
    const { userInfoDispatch} = useContext(UserContext);
    const handleLogout = ()=>{
        userInfoDispatch({type:"REMOVE_ACCOUNT"});
        close();
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                close(); // 如果点击的不是菜单或其内部的内容，关闭菜单
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return(
        <div className={styles.dropdown_menu} ref={menuRef}>
            <NavLink to={"/currentorders"} className={styles.menu_item}><p>Trace Orders</p></NavLink>
            <NavLink to={"/historyorders"} className={styles.menu_item}><p>Orders in History</p></NavLink>
            <div className={styles.menu_item}><p>Setting</p></div>
            <div className={styles.menu_item} onClick={handleLogout}><p>Log Out</p></div>
        </div>
    )
};