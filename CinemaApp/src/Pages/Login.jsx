
import React from 'react';
import {useShows} from '../context/ShowsContext';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

import styles from "../app.module.scss"

import { Dna } from 'react-loader-spinner'

const Login = () => {
    const {isLoading} = useShows();
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
          <LoginForm/>
          <Footer />
        </div>
      )
  )
}

export default Login;