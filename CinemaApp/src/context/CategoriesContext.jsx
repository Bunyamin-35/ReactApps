
import { createContext,useContext,useState } from "react";
import { useShows } from "./ShowsContext";

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {

    const {films} = useShows();

    const [filteredFilms, setFilteredFilms] = useState([]);

    const categories = ["All", "Drama", "Science-Fiction", "Thriller", "Action", "Crime", "Horror", "Romance", "Crime", "Adventure", "Espionage", "Music", "Mystery", "Supernatural"]

    const handleCategory = (e) => {
        const filtered = []
        if (e !== "All") {
            films.map(film => {
                if(film.genres.includes(e)){
                    filtered.push(film);
                }
            });
            setFilteredFilms(filtered);
        } else if(e=== "All") {
            setFilteredFilms(films);
        }
    }


    const values = {
        handleCategory,
        categories,
        filteredFilms,
    }

    return (
        <CategoriesContext.Provider value={values}>
            {children}
        </CategoriesContext.Provider>
    )
}
export const useCategories = () => useContext(CategoriesContext);