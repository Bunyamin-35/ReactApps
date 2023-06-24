import React, {useState } from 'react'
import { Link } from 'react-router-dom';
import {useShows} from '../context/ShowsContext'

import styles from "./hero.module.scss"

import {
    CaretRightOutlined,
    CaretLeftOutlined,
} from '@ant-design/icons';


const Hero = () => {
    const { highrated, actionsShows } = useShows();
    const [showsPerPage] = useState(4);

    const [startIdxPopular, setStartIndexPopular] = useState(0)
    const [endIdxPopular, setEndIdxPopular] = useState(showsPerPage)

    const [startIdxAction, setStartIndexAction] = useState(0)
    const [endIdxAction, setEndIdxAction] = useState(showsPerPage)

    
    const handleNextIndexPopular = () => {
        setStartIndexPopular(startIdxPopular + 1)
        setEndIdxPopular(endIdxPopular + 1);
        if (endIdxPopular === highrated.length) {
            setEndIdxPopular(showsPerPage);
            setStartIndexPopular(0)
        }
    };
    
    const handlePrevIndexPopular = () => {
        setStartIndexPopular(startIdxPopular - 1)
        setEndIdxPopular(endIdxPopular - 1)
        if (startIdxPopular === 0) {
            setStartIndexPopular(highrated.length - showsPerPage)
            setEndIdxPopular(highrated.length);
        }
    };
    const handleNextIndexAction = () => {
        setStartIndexAction(startIdxAction + 1)
        setEndIdxAction(endIdxAction + 1);
        if (endIdxAction === highrated.length) {
            setEndIdxAction(showsPerPage);
            setStartIndexAction(0)
        }
    };
    
    const handlePrevIndexAction = () => {
        setStartIndexAction(startIdxAction - 1)
        setEndIdxAction(endIdxAction - 1)
        if (startIdxAction === 0) {
            setStartIndexAction(highrated.length - showsPerPage)
            setEndIdxAction(highrated.length);
        }
    };

    const visibleShows = highrated.slice(startIdxPopular, endIdxPopular);
    const visibleActionShows = actionsShows.slice(startIdxAction, endIdxAction);


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
                <button className={styles.prev_btn} onClick={handlePrevIndexPopular}>
                    <CaretLeftOutlined />
                </button>
                <div className={styles.slider}>
                    {visibleShows.map((show) => (
                        <Link className={styles.slider_image} key={show.id} to={`/shows/${show.name}`}>
                            <img src={show.image.original} alt={show.name} />
                        </Link>
                    ))}
                </div>
                <button className={styles.next_btn} onClick={handleNextIndexPopular} >
                    <CaretRightOutlined />
                </button>
            </div>
            <div className={styles.title}><h2><span>Action</span> Shows</h2></div>
            <div className={styles.container}>
                <button className={styles.prev_btn} onClick={handlePrevIndexAction}>
                    <CaretLeftOutlined />
                </button>
                <div className={styles.slider}>
                    {visibleActionShows.map((show) => (
                        <Link className={styles.slider_image} key={show.id} to={`/shows/${show.name}`}>
                            <img src={show.image.original} alt={show.name} />
                        </Link>
                    ))}
                </div>
                <button className={styles.next_btn} onClick={handleNextIndexAction}>
                    <CaretRightOutlined />
                </button>
            </div>
        </>
    );
};

export default Hero;