import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Details = () => {
    const {id} = useParams();   
  return (
    <div>
        <Header/>
        <h1>Details {id}</h1>
        <Footer />
    </div>
  )
}

export default Details;