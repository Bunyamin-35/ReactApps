import React, { useState, useEffect } from 'react';
import Categories from './components/Categories';
import "./App.css"
const RestaurantApp = () => {
  const [selectedCountry, setSelectedCountry] = useState('Turkish');
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals();
  }, [selectedCountry]);


  const fetchMeals = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCountry}`);
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <h1>Eat Around the World</h1>
      <div className='actions'>
        <button onClick={() => handleCountryChange('Turkish')}>Turkish Cuisine</button>
        <button onClick={() => handleCountryChange('Italian')}>Italian Cuisine</button>
        <button onClick={() => handleCountryChange('Mexican')}>Mexico Cuisine</button>
        {/* Diğer ülkeler için gerekli butonlar eklenebilir */}
      </div>
      <Categories meals={meals} />
    </>
  );
};

export default RestaurantApp;
