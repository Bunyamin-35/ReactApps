
import { useShows } from '../context/ShowsContext'

import styles from "./categories.module.scss"
const Categories = () => {
    const {handleCategory,categories} = useShows();
    
    
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