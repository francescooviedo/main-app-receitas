import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './componentsCss/CategoryFilter.css';
import MyContext from '../Context/MyContext';
import mealsAPI from '../helpers/functionsAPI';
import drinksAPI from '../helpers/drinkAPI';

export default function CategoryFilter({ apiType }) {
  const [buttonState, setButtonState] = useState(true);
  const CINCO = 5;
  const apiString = 'search.php?s=';
  const { categoryMeal, setAPIDrinks, setAPIMeals } = useContext(MyContext);

  const clickdrink = async (cat) => {
    if (buttonState) {
      const { drinks } = await drinksAPI(`filter.php?c=${cat}`);
      setAPIDrinks(drinks);
      setButtonState(false);
    } else {
      const response = await drinksAPI(apiString);
      setAPIDrinks(response.drinks);
      setButtonState(true);
    }
  };
  const clickmeal = async (cat) => {
    if (buttonState) {
      const { meals } = await mealsAPI(`filter.php?c=${cat}`);
      setAPIMeals(meals);
      setButtonState(false);
    } else {
      const response = await mealsAPI(apiString);
      setAPIMeals(response.meals);
      setButtonState(true);
    }
  };

  const allMeals = async () => {
    const response = await mealsAPI(apiString);
    setAPIMeals(response.meals);
  };
  const allDrinks = async () => {
    const response = await drinksAPI(apiString);
    setAPIDrinks(response.drinks);
  };

  return (
    <div className="filtercss">
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={
          apiType === categoryMeal
            ? () => allMeals()
            : () => allDrinks()
        }
      >
        All
      </button>
      {apiType.slice(0, CINCO).map((categoria) => (
        <button
          onClick={
            apiType === categoryMeal
              ? () => clickmeal(categoria.strCategory)
              : () => clickdrink(categoria.strCategory)
          }
          type="button"
          key={ Math.random() }
          data-testid={ `${categoria.strCategory}-category-filter` }
        >
          {categoria.strCategory}

        </button>
      ))}
    </div>
  );
}
CategoryFilter.propTypes = {
  apiType: PropTypes.array,
}.isRequired;
