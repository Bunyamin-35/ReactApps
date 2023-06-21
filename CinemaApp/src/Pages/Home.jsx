import React, { useContext} from 'react'

import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import styles from "../app.module.scss"

import { Dna } from 'react-loader-spinner'
import ShowsContext from '../context/ShowsContext';

const Home = () => {
    const { isLoading} = useContext(ShowsContext);

    return (
        
            (isLoading ? <div className={styles.loader}>
                <Dna
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
            </div> :
                <div className={styles.home}>
                    <Header />
                    <Hero />
                    <Footer />
                </div>
            ))
}

export default Home;