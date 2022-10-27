import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShareIcon from '../images/shareIcon.svg';

function DoneRecipeCard({ recipe, index }) {
  const pathToRecipeDetails = recipe.meals ? (
    `/meals/${recipe.idMeal}`) : `/drinks/${recipe.idDrink}`;
  console.log(recipe);
  return (
    <div>
      <Link to={ pathToRecipeDetails }>
        <img
          key={ index }
          height="200px"
          width="200px"
          data-testid={ `${index}-horizontal-image` }
          src={ recipe.strDrinkThumb || recipe.strMealThumb }
          alt="meals"
        />
      </Link>
      <div>
        <div>
          <Link to={ pathToRecipeDetails }>
            <h1 data-testid={ `${index}-horizontal-name` }>
              {recipe.strMeal || recipe.strDrink}
            </h1>
          </Link>
          <p data-testid={ `${index}-horizontal-top-text` }>
            { recipe.meals ? (
              `${recipe.strArea} ${recipe.strCategory}`
            ) : recipe.strAlcoholic }
          </p>
        </div>
        <div>
          <p
            data-testid={ `${index}-horizontal-done-date` }
          >
            {recipe.doneDate}
            {/* doneDate data que terminou a */}
          </p>
        </div>
        <div>
          <p
            data-testid={ `${index}-horizontal-share-btn` }
            img
            src={ ShareIcon }
          >
            Compartilhar receita
          </p>
          {/* Preciso instalar um import clipboard */}
        </div>
        <div>
          { recipe.tags && recipe.tags.map((tagName) => (
            <div
              key={ tagName }
              data-testid={ `${index}-${tagName}-horizontal-tag` }
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

DoneRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    alcoholicOrNot: PropTypes.string,
    category: PropTypes.string,
    doneDate: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    nationality: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default DoneRecipeCard;
