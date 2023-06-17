import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from '../components/Card'
import Header from '../components/Header'

const Series = () => {
    useEffect(() => {
        fetchFilms();
    }, [])
    const [films, setFilms] = useState([])
    const [filtered, setfiltered] = useState('')

    const fetchFilms = async () => {
        const response = await axios.get("https://api.tvmaze.com/shows");
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
            <Card filteredList={filteredList} />
        </>
    )
}

export default Series;