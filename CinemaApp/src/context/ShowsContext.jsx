import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'



const ShowsContext = createContext();

export const ShowsProvider = ({ children }) => {

    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { pathname } = useLocation();
    useEffect(() => {
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false);
        },1500)
    }, [pathname])

    useEffect(() => {
        setIsLoading(true);
        setTimeout(()=>{
            setIsLoading(false);
            fetchFilms();
        },3000)
    }, []);
  

    const fetchFilms = async () => {
        const response = await axios.get("https://api.tvmaze.com/shows").finally(setIsLoading(false));
        setFilms(response.data);
    }

    const [filtered, setfiltered] = useState('');

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

    const [theme, setTheme] = useState("dark");
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const highrated = filteredList.filter((film)=> film.rating.average>"8.5")
    const actionsShows = filteredList.filter((film)=> film.genres.includes("Action"))


    const values = {
        films,
        setFilms,
        isLoading,
        setIsLoading,
        theme,
        setTheme,
        handleChange,
        filteredList,
        highrated,
        actionsShows,
    }

    return (
        <ShowsContext.Provider value={values}>
            {children}
        </ShowsContext.Provider>
    )
}
export default ShowsContext;