import React, { useEffect, useState, useContext } from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ShowsContext from '../context/ShowsContext'

const Series = () => {
    const { isLoading} = useContext(ShowsContext);
    return (
        <div>
            <Header />
            {isLoading ? "Loading" :
                <Card />
            }
            <Footer />
        </div>
    )
}

export default Series;