import React from 'react'
import styles from "./header.module.scss"
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
const Header = ({ handleChange }) => {
    return (
        <div className={styles.header}>
            <div className={styles.header_logo}>
            </div>
            <div className={styles.header_actions}>
                <Link exact className={styles.home_page} activeClassName={styles.active} to="/">Home</Link>
                <Link  className={styles.list_page} activeClassName={styles.active} to="/shows">Shows</Link>
            </div>
            <div className={styles.form}>
                <input onChange={handleChange} placeholder='Search Series' />
                <SearchOutlined />
            </div>
        </div>
    )
}

export default Header;