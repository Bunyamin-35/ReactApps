import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import styles from "../app.module.scss"

const Home = () => {
    return (
        <div className={styles.home}>
            <Header />
            <Hero />
            <Footer />
        </div>
    )
}

export default Home;