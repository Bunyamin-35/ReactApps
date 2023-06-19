import styles from "./header.module.scss"
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import SwitchTheme from './SwitchTheme';
import ShowsContext from "../context/ShowsContext";
import { useContext } from "react";

const Header = () => {

    const { theme, setTheme,handleChange } = useContext(ShowsContext);

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
            <SwitchTheme theme={theme} setTheme={setTheme} />

        </div>
    )
}

export default Header;