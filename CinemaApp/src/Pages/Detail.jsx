import React from 'react'
import {useShows} from "../context/ShowsContext"

import Header from '../components/Header'
import Footer from '../components/Footer'
import Details from '../components/Details'
import styles from "../app.module.scss"

import { Dna } from 'react-loader-spinner'


const Detail = () => {
  const { isLoading } = useShows();

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
        <Details />
        <Footer />
      </div>
    )
  )
}

export default Detail;