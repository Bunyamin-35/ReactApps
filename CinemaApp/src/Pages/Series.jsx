import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../components/Card'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Series = () => {
    useEffect(() => {
        fetchFilms();
    }, [])
    const [films, setFilms] = useState([])
    const [filtered, setfiltered] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const fetchFilms = async () => {
        const response = await axios.get("https://api.tvmaze.com/shows").finally(setIsLoading(false));
        setFilms(response.data)
    }
    const handleChange = (e) => {
        setfiltered(e.target.value.toLowerCase());
    }
    const filteredList = films.filter((film) => {
        return Object.keys(film).some((key) => {
            return (
                key === "name" && film[key].toLowerCase().includes(filtered)
            )
        })
    });
    return (
        <>
            <Header handleChange={handleChange} />
            {isLoading ? "Loading" :
                <Card filteredList={filteredList} />
            }
            <Footer/>
        </>
    )
}

export default Series;