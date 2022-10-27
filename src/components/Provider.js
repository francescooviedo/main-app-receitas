import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../Context/MyContext';
import mealsAPI from '../helpers/functionsAPI';
import drinksAPI from '../helpers/drinkAPI';

function Provider({ children }) {
  const [radio, setRadio] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [buttonDrink, setDrink] = useState(false);
  const [buttonMeal, setMeal] = useState(true);
  const [condicionalRender, setCondRender] = useState(false);
  const [APIMeals, setAPIMeals] = useState([0, 1]);
  const [APIDrinks, setAPIDrinks] = useState([0, 1]);
  const [categoryMeal, setCategoryMeal] = useState([]);
  const [categoryDrink, setCategoryDrink] = useState([]);

  const handleChangeRadio = ({ target }) => {
    setRadio(target.value);
  };
  const handleChange = ({ target }) => {
    setInputSearch(target.value);
  };
  useEffect(() => {
    const apiComida = async () => {
      const response = await mealsAPI('search.php?s=');
      setAPIMeals(response.meals);
    };
    const apiBebidas = async () => {
      const response = await drinksAPI('search.php?s=');
      setAPIDrinks(response.drinks);
    };
    const apiCategoryMeal = async () => {
      const { meals } = await mealsAPI('list.php?c=list');
      setCategoryMeal(meals);
    };
    const apiCategoryDrink = async () => {
      const { drinks } = await drinksAPI('list.php?c=list');
      setCategoryDrink(drinks);
    };
    apiCategoryDrink();
    apiCategoryMeal();
    apiComida();
    apiBebidas();
  }, []);
  const contextValue = useMemo(() => ({
    categoryDrink,
    setCategoryDrink,
    categoryMeal,
    setAPIDrinks,
    APIDrinks,
    APIMeals,
    setAPIMeals,
    condicionalRender,
    setCondRender,
    buttonMeal,
    buttonDrink,
    setDrink,
    setMeal,
    radio,
    handleChange,
    inputSearch,
    setInputSearch,
    handleChangeRadio,

  }), [radio,
    inputSearch,
    buttonDrink,
    buttonMeal,
    APIMeals,
    condicionalRender,
    APIDrinks,
  ]);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
