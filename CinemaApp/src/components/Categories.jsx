
import { useCategories } from '../context/CategoriesContext';

import styles from "./categories.module.scss"
const Categories = () => {
    const {handleCategory,categories} = useCategories();
    
    
    return (
        <div className={styles.actions}>
            {categories.map((item, index) => {
                return (
                    <button className={styles.btn} key={index} value={item} onClick={(e)=>handleCategory(e.target.value)}>{item}</button>
                )
            })}
        </div>
    )
}

export default Categories;