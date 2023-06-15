import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../components/Card'

const Series = () => {
    useEffect(()=>{
        fetchFilms();
    },[])
    const[films,setFilms] = useState([])
    const fetchFilms = async () => {
        const response = await axios.get("https://api.tvmaze.com/shows");
        setFilms(response.data)
    }
  return (
    <Card films={films}/>
  )
}

export default Series;