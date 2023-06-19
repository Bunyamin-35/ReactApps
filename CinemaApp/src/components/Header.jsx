import React, { useEffect, useState } from 'react'
import styles from "./header.module.scss"
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
const Header = ({ handleChange,theme,setTheme}) => {
    
    const checkTheme = () => {
        theme === "dark"  ? setTheme("light"):setTheme("dark")
    }
    
    return (
        <div className={styles.header}>
            <div className={styles.header_logo}>
            </div>
            <div className={styles.header_actions}>
                <Link className={styles.home_page} to="/">Home</Link>
                <Link className={styles.list_page} to="/shows">Shows</Link>
            </div>
            <div className={styles.form}>
                <input onChange={handleChange} placeholder='Search Series' />
                <SearchOutlined />
            </div>
            <div className={styles.toggle_switch}>
                <label className={styles.switch_label}>
                    <input onClick={checkTheme} type="checkbox" className={styles.checkbox}/>
                    <span className={styles.slider}></span>
                </label>
            </div>
        </div>
    )
}

export default Header;