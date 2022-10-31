import React, { useState } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FavoriteButton({ receita, dataId }) {
  const [favorite, setFavorite] = useState(true);

  const isFavorite = (id) => {
    const favoriteRecipe = receita.filter((meal) => meal.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipe));
    setFavorite(false);
  };
  console.log(dataId);

  return (
    <div>
      <button
        type="button"
        data-testid={ dataId }
        onClick={ () => isFavorite(receita.id) }
      >
        <img src={ favorite ? blackHeartIcon : whiteHeartIcon } alt="Heart Icon" />
      </button>
    </div>
  );
}

FavoriteButton.propTypes = {
  dataId: PropTypes.string.isRequired,
  receita: PropTypes.string.isRequired,
};

export default FavoriteButton;
