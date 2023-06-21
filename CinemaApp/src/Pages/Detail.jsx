import React from 'react'
import { useContext} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Details from '../components/Details'
import { Dna } from 'react-loader-spinner'
import ShowsContext from '../context/ShowsContext';
import styles from "../app.module.scss"


const Detail = () => {
  const { isLoading } = useContext(ShowsContext);

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