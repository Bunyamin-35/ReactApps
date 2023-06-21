import React, { useEffect, useState, useContext } from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ShowsContext from '../context/ShowsContext'
import styles from "../app.module.scss"
import { Dna } from 'react-loader-spinner'

const Series = () => {
    const { isLoading } = useContext(ShowsContext);
    return (
        (isLoading ?
            <div className={styles.loader}>
                <Dna
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                /> </div> :
            <div className={styles.home}>
                <Header />
                <Card />
                <Footer />
            </div>)
    )
}

export default Series;