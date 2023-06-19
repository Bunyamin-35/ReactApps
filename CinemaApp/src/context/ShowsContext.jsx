import axios from "axios";
import { createContext, useEffect, useState } from "react";


const ShowsContext = createContext();

export const ShowsProvider = ({ children }) => {

    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchFilms();
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



    const values = {
        films,
        setFilms,
        isLoading,
        theme,
        setTheme,
        handleChange,
        filteredList,
    }

    return (
        <ShowsContext.Provider value={values}>
            {children}
        </ShowsContext.Provider>
    )
}
export default ShowsContext;