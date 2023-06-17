import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'


const Details = () => {
    const {id} = useParams();   
  return (
    <div>
        <Header/>
        <h1>Details {id}</h1>
    </div>
  )
}

export default Details;