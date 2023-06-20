import React, { useContext, useState } from 'react'
import ShowsContext from '../context/ShowsContext'
import styles from "./hero.module.scss"
import { Link } from 'react-router-dom';

import {
    CaretRightOutlined,
    CaretLeftOutlined,
} from '@ant-design/icons';


const Hero = () => {
    const { highrated } = useContext(ShowsContext);
    const [showsPerPage] = useState(4);

    const [startIdx, setStartIndex] = useState(0)
    const [endIdx, setEndIdx] = useState(showsPerPage)

    const handleNextIndex = () => {
        setStartIndex(startIdx + 1)
        setEndIdx(endIdx + 1);
        if (endIdx === highrated.length) {
            setEndIdx(showsPerPage);
            setStartIndex(0)
        }
    };
    const handlePrevIndex = () => {
        setStartIndex(startIdx - 1)
        setEndIdx(endIdx - 1)
        if (startIdx === 0) {
            setStartIndex(highrated.length - showsPerPage)
            setEndIdx(highrated.length);
        }
    };

    const visibleShows = highrated.slice(startIdx, endIdx);

    return (
        <>
            <div className={styles.hero}>
                <div className={styles.content}>
                    <h1>For Better <span>Experince</span></h1>
                    <p>Dive into an enticing collection of high-rated shows, offering thrilling storylines, captivating adventures, and unforgettable characters. Get ready to be hooked as you explore the best of television's captivating world.</p>
                </div>
            </div>
            <div className={styles.title}><h2><span>Most</span> Popular</h2></div>
            <div className={styles.container}>
                <button className={styles.prev_btn} onClick={handlePrevIndex}>
                    <CaretLeftOutlined />
                </button>
                <div className={styles.slider}>
                    {visibleShows.map((show) => (
                        <Link className={styles.slider_image} key={show.id} to="/shows">
                            <img src={show.image.original} alt={show.name} />
                        </Link>
                    ))}
                </div>
                <button className={styles.next_btn} onClick={handleNextIndex}>
                    <CaretRightOutlined />
                </button>
            </div>
        </>
    );
};

export default Hero;