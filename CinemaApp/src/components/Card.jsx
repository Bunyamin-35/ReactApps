import React from 'react'
import styles from "./card.module.scss"

const Card = ({ films }) => {
    return (
        <div className={styles.card_wrapper}>
            {films.map((item, index) => {
                return (
                    <div className={styles.card} key={index}>
                        <div className={styles.card_image}>
                            <img src={item.image.original}></img>
                        </div>
                        <div className={styles.card_info}>
                            {item.name}
                        </div>
                    </div>
                )

            })}
        </div>
    )
}

export default Card;