import { Link } from "react-router-dom";
import styles from "../styles/CategoryCard.module.scss";
export const CategoryCard = ({category, imgUrl})=>{

    // console.log("CategoryCard",category);
    return (
            <Link to={`/${category}`} className={styles.linkStyle}>
                <div className={styles.categoryCard}>
                    <img src={imgUrl} />
                    <span className={styles.categoryTitle}>{category}</span>
                </div>
            </Link>
    );
};