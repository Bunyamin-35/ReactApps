import React from 'react'
import styles from "./header.module.scss"

const SwitchTheme = ({theme,setTheme}) => {
    const checkTheme = () => {
        theme === "dark"  ? setTheme("light"):setTheme("dark")
    }
    return (
        <div className={styles.toggle_switch}>
            <label className={styles.switch_label}>
                <input onClick={checkTheme} type="checkbox" className={styles.checkbox} />
                <span className={styles.slider}></span>
            </label>
        </div>
    )
}

export default SwitchTheme;