import React, { useState, useEffect } from 'react';
import "../App.css"

const Categories = ({ meals }) => {
    const [currentID, setCurrentId] = useState(null)
    const [filterValue, setFilterValue] = useState("");
    const [description, setDescription] = useState("")

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value.toLowerCase());
    }

    const filteredList = meals.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key].toString().toLowerCase().includes(filterValue)
        })
    });

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        if (currentID) {
            fetchDescription();
        }
    }, [currentID]);
    const fetchDescription = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${currentID}`);
            const data = await response.json();
            setDescription(data.meals[0].strInstructions);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="search">
                <input value={filterValue} onChange={handleFilterChange} placeholder="Search" />
            </div>
            <div className='card-wrapper'>
                {filteredList.map((meal) => {

                    return (
                        <div className='card' key={meal.idMeal}>
                            <img className='card-img' src={meal.strMealThumb} alt="" />
                            <h3>{meal.strMeal}</h3>
                            <button className='btn-recipe' onClick={() => {
                                handleOpenModal();
                                setCurrentId(meal.idMeal);
                            }}>Click for Recipe..
                            </button>
                        </div>
                    )
                })}
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={handleCloseModal}>
                            Close
                        </button>
                        <div className="desc-card">
                            {filteredList.map((meal) => {
                                return (
                                    <div key={meal.idMeal}>
                                        <h3 className='desc-title' >{meal.idMeal === currentID && meal.strMeal}</h3>
                                        {/* <img className='card-img' src={meal.idMeal === currentID && meal.strMealThumb} alt="" /> */}
                                    </div>
                                )
                            })}
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Categories;