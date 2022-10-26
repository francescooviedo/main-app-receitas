import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

export default function DrinkCard() {
  const { drink } = useContext(MyContext);
  return (
    <div className="receitasContainer">
      {drink.map((receita, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ receita.idDrink }
          className="recipeCard"
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ receita.strDrinkThumb }
            alt="fotoComida"
          />
          <h4
            key={ receita.idDrink }
            data-testid={ `${index}-recipe-card` }
          >
            {receita.strDrink}

          </h4>
        </div>
      ))}

    </div>

  );
}
