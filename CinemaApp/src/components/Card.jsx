import React from 'react'
import styles from "./card.module.scss"

const Card = ({films}) => {
  return (
    <div className={styles.card}>
        {films.map((item,index) =>{
            return(
                <div className={styles.card_wrapper} key={index}>
                    <img src={item.image.original} alt='image'/>
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