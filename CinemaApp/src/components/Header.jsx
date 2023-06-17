import React from 'react'
import styles from "./header.module.scss"
import { SearchOutlined } from '@ant-design/icons';
const Header = ({handleChange}) => {
    return (
        <div className={styles.header}>
            <div className={styles.header_logo}>
            </div>
            <div className={styles.header_actions}>
                <a className={styles.home_page} to="/">Home</a>
                <a className={styles.list_page} to="/">Series</a>
            </div>
            <div className={styles.form}>
                <input onChange={handleChange} placeholder='Search Series' />
                <SearchOutlined />
            </div>
        </div>
    )
}

export default Header;