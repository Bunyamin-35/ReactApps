import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import {useShows} from '../context/ShowsContext';

import styles from "./details.module.scss"

import {
    StarOutlined,
    LikeOutlined,
    CaretRightOutlined,
} from '@ant-design/icons';

const Details = () => {
    const { id } = useParams();
    const { filteredList } = useShows();
    const currentShow = filteredList.find((show) => show.name === id);

    return (
        currentShow && (
            <div className={styles.detailcard}>
                <div className={styles.detailcard_image}>
                    <img src={currentShow.image.original}></img>
                </div>
                <div className={styles.detailcard_content}>
                    <div className={styles.film_info}>
                        <h2 className={styles.film_name}>
                            <CaretRightOutlined />
                            <span>{currentShow.name}</span>
                        </h2>
                        <p>{currentShow.summary}</p>
                    </div>
                </div>
            </div>
        )

    )
}

export default Details;