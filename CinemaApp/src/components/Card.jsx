import React, { useContext } from 'react'
import styles from "./card.module.scss"
import { Link } from 'react-router-dom';
import ShowsContext from '../context/ShowsContext';

import {
    StarOutlined,
    LikeOutlined,
    CaretRightOutlined,
} from '@ant-design/icons';

const Card = () => {
    const { theme, filteredList } = useContext(ShowsContext);

    return (
        <div className={styles.card_wrapper}>
            {filteredList.map((item, index) => {
                return (
                    <div className={theme === "light" ? styles.card_light : styles.card} key={index}>
                        <div className={styles.card_image}>
                            <img src={item.image.original}></img>
                        </div>
                        <div className={styles.card_content}>
                            <div className={styles.rating}>
                                <span className={styles.rating_icon}><StarOutlined /></span>
                                <span className={styles.average_rating}>{item.rating.average}</span>
                                <button className={styles.rate}><span><LikeOutlined /></span></button>
                            </div>
                            <div className={styles.film_info}>
                                <h2 className={styles.film_name}><CaretRightOutlined />{item.name}</h2>
                                <button className={styles.film_details}>
                                    <Link className={theme === "light" ? styles.detail_btn_light : styles.detail_btn} to={`/shows/${item.name}`}>Details</Link>
                                    <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className={`${styles.h_6} ${styles.w_6}`} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}

export default Card;