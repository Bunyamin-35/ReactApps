import React from 'react'
import styles from "./footer.module.scss"
import { Link } from 'react-router-dom'
import { GithubOutlined, LinkedinOutlined, UserOutlined } from '@ant-design/icons';


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.share}>
                <Link className={`${styles.share_links} ${styles.github}`} to="https://github.com/Bunyamin-35"><GithubOutlined /></Link>
                <Link className={`${styles.share_links} ${styles.linkedin}`} to="https://www.linkedin.com/in/bulutbunyamin/"><LinkedinOutlined /></Link>
                <Link className={`${styles.share_links} ${styles.portfolio}`} to="https://bunyamin-35.github.io/"><UserOutlined /></Link>
            </div>
            <div className={styles.links}>
                <Link className={styles.navbar} to="/">Home</Link>
                <Link className={styles.navbar} to="/shows">Shows</Link>
            </div>
            <div className={styles.credit}><Link className={styles.credit} to="https://bunyamin-35.github.io/">© 2023 created by <span>Bunyamin BULUT</span> | all rights reserved</Link></div>
        </div>
    )
}

export default Footer;