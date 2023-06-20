
import { useParams } from 'react-router-dom'
import ShowsContext from '../context/ShowsContext';
import React, { useContext, useState } from 'react'
import styles from "./details.module.scss"
import { Link } from 'react-router-dom';

import {
    StarOutlined,
    LikeOutlined,
    CaretRightOutlined,
} from '@ant-design/icons';

const Details = () => {
    const { id } = useParams();
    const { theme, filteredList } = useContext(ShowsContext);
    const currentShow = filteredList.find((show) => show.name === id);

    return (
        currentShow && (
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <img src={currentShow.image.original}></img>
                </div>
                <div className={styles.card_content}>
                    <div className={styles.rating}>
                        <span className={styles.rating_icon}><StarOutlined /></span>
                        <span className={styles.average_rating}>{currentShow.rating.average}</span>
                        <button className={styles.rate}><span><LikeOutlined /></span></button>
                    </div>
                    <div className={styles.film_info}>
                        <h2 className={styles.film_name}><CaretRightOutlined />{currentShow.name}</h2>
                        <p>{currentShow.summary}</p>
                        <button className={styles.film_details}>
                            
                        </button>
                    </div>
                </div>
            </div>
        )

    )
}

export default Details;