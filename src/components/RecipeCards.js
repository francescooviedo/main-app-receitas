import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

export default function RecipeCard() {
  const { receitas } = useContext(MyContext);
  return (
    <div className="receitasContainer">
      {receitas.map((receita, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ receita.idMeal }
          className="recipeCard"
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ receita.strMealThumb }
            alt="fotoComida"
          />
          <h4
            key={ receita.idMeal }
            data-testid={ `${index}-recipe-card` }
          >
            {receita.strMeal}

          </h4>
        </div>
      ))}
    </div>
  );
}
