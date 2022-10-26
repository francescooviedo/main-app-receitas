
import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../Context/MyContext';
import mealsAPI from '../helpers/functionsAPI';
import drinksAPI from '../helpers/drinkAPI';

import mealsAPI
 from '../helpers/functionsAPI';
export default function SearchBar() {
  const [inputSearch, handleChange] = useState('');

  const {
    API,
    setAPI,
    radio,
    handleChangeRadio,
  } = useContext(MyContext);

  const history = useHistory();
  const functionSelector = history.location.pathname === '/meals';
  const clickMeals = async () => {
    setAPI([0, 1]);
    if (radio === 'ingrediente') {
      const ingredientesApi = await mealsAPI(`filter.php?i=${inputSearch}`);
      setAPI(ingredientesApi.meals);
    }
    if (radio === 'nome') {
      const ingredientesApi = await mealsAPI(`search.php?s=${inputSearch}`);
      setAPI(ingredientesApi.meals);
    }
    if (radio === 'primeira-letra') {
      if (inputSearch.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      const ingredientesApi = await mealsAPI(`search.php?f=${inputSearch}`);
      setAPI(ingredientesApi.meals);
    }
  };

  const clickBebidas = async () => {
    setAPI([0, 1]);
    if (radio === 'ingrediente') {
      const ingredientesApi = await drinksAPI(`filter.php?i=${inputSearch}`);
      setAPI(ingredientesApi.drinks);
    }
    if (radio === 'nome') {
      const ingredientesApi = await drinksAPI(`search.php?s=${inputSearch}`);
      setAPI(ingredientesApi.drinks);
    }
    if (radio === 'primeira-letra') {
      if (inputSearch.length > 1) {
        return global.alert('Your search must have only 1 (one) character');
      }
      const ingredientesApi = await drinksAPI(`search.php?f=${inputSearch}`);
      setAPI(ingredientesApi.drinks);
    }
  };
  useEffect(() => {
    const DOZE = 12;
    if (API === null) {
      return console.log('A');
    }
    if (API.length > DOZE) {
      console.log(API);
    }
    if (API.length === 1) {
      if (functionSelector) {
        history.push(`/meals/${API[0].idMeal}`);
      }
      if (!functionSelector) {
        history.push(`/drinks/${API[0].idDrink}`);
      }
    }
  }, [API]);

  return (
    <div>
      <input
        type="text"
        value={ inputSearch }
        data-testid="search-input"
        onChange={ (e) => handleChange(e.target.value) }
      />
      <label
        htmlFor="ingredient"
      >
        <input
          data-testid="ingredient-search-radio"
          type="radio"
          value="ingrediente"
          onChange={ handleChangeRadio }
          name={ radio }
          id="ingredient"
        />
        Ingredient
      </label>

      <label
        htmlFor="name"
      >
        <input
          data-testid="name-search-radio"
          type="radio"
          value="nome"
          onChange={ handleChangeRadio }
          name={ radio }
          id="name"
        />
        Name
      </label>

      <label
        htmlFor="firstletter"
      >
        <input
          data-testid="first-letter-search-radio"
          type="radio"
          value="primeira-letra"
          onChange={ handleChangeRadio }
          name={ radio }
          id="firstletter"
        />
        First letter
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ functionSelector ? clickMeals : clickBebidas }
      >
        Search
      </button>
    </div>
  );
}
