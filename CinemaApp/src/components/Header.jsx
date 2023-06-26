import React from "react";
import { Link } from 'react-router-dom';
import { useShows } from "../context/ShowsContext";
import { useTheme } from "../context/ThemeContext";

import SwitchTheme from './SwitchTheme';

import styles from "./header.module.scss"

// import { SearchOutlined } from '@ant-design/icons';

const Header = () => {
    // const { handleChange } = useShows();
    const { theme, setTheme } = useTheme();
    const { pathname } = useShows();
    console.log("pathname:", pathname);
    return (
        <div className={styles.header}>
            <div className={styles.header_logo}>
            </div>
            <div className={styles.header_actions}>
                <Link className={pathname === "/" ? `${styles.home_page} ${styles.active}` : `${styles.home_page} `} to="/">Home</Link>
                <Link className={pathname === "/shows" ? `${styles.home_page} ${styles.active}` : `${styles.home_page} `} to="/shows">Shows</Link>
                <Link className={pathname === "/login" ? `${styles.home_page} ${styles.active}` : `${styles.home_page} `} to="/login">Login</Link>
            </div>
            {/* <div className={styles.form}>
                <input onChange={handleChange} placeholder='Search Series' />
                <SearchOutlined />
            </div> */}
            {/* <SwitchTheme theme={theme} setTheme={setTheme} /> */}

        </div>
    )
}

export default Header;