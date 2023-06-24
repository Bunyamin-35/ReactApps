import React from 'react'
import {useShows} from '../context/ShowsContext'

import Card from '../components/Card'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Categories from '../components/Categories'

import styles from "../app.module.scss"

import { Dna } from 'react-loader-spinner'

const Series = () => {
    const { isLoading } = useShows();
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
                <Categories/>
                <Card />
                <Footer />
            </div>)
    )
}

export default Series;