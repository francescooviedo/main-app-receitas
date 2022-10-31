import React, { useState } from 'react';
import PropTypes, { number, string } from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavoriteButton({ receita, dataId }) {
  const [favorite, setFavorite] = useState(true);

  // const isFavorite = (id) => {
  //   const favoriteRecipe = receita.filter((meal) => meal.id !== id);
  //   localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipe));
  //   setFavorite(false);
  // };
  // console.log(dataId);
  console.log(typeof receita);

  const favoriteToLocalStorage = () => {
  //   const objFavoriteToAdd = () => {
  //     const drinkOrMeal = receita.type;
  //     if (drinkOrMeal === 'meal') {
  //       const mealToAdd = receita;
  //       // {
  //       //   id: info.idMeal,
  //       //   type: 'meal',
  //       //   nationality: info.strArea,
  //       //   category: info.strCategory,
  //       //   alcoholicOrNot: '',
  //       //   name: info.strMeal,
  //       //   image: info.strMealThumb,
  //     }
  //     // return mealToAdd;
  //     if (drinkOrMeal === 'drink') {
  //       const drinkToAdd = receita;
  //       // id: info.idDrink,
  //       // type: 'drink',
  //       // nationality: '',
  //       // category: info.strCategory,
  //       // alcoholicOrNot: info.strAlcoholic,
  //       // name: info.strDrink,
  //       // image: info.strDrinkThumb,
  //       // return drinkToAdd;
  //     }
  //   };

    // const objToAdd = objFavoriteToAdd();
    const favoritesOnLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favoritesOnLocalStorage && !favorite) {
      const arrayToAdd = [...favoritesOnLocalStorage, receita];
      localStorage.setItem('favoriteRecipes', JSON.stringify(arrayToAdd));
      setFavorite(true);
    }
    // if (!favoritesOnLocalStorage && !favorite) {
    //   localStorage.setItem('favoriteRecipes', JSON.stringify([receita]));
    //   setFavorite(true);
    // }
    if (favorite) {
      const newArray = [...favoritesOnLocalStorage]
        .filter((recipe) => recipe.id !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newArray));
      setFavorite(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        data-testid={ dataId }
        onClick={ () => favoriteToLocalStorage }
      >
        <img src={ favorite ? blackHeartIcon : whiteHeartIcon } alt="Heart Icon" />
      </button>
    </div>
  );
}

FavoriteButton.propTypes = {
  dataId: PropTypes.string.isRequired,
  // receita: PropTypes.objectOf.isRequired,
  receita: PropTypes.objectOf(
    PropTypes.shape({
      id: number,
      type: string,
      nationality: string,
      category: string,
      alcoholicOrNot: string,
      name: string,
      image: string,
    }),
  ).isRequired,
};

export default FavoriteButton;
