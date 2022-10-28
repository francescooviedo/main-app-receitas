import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MyContext from '../Context/MyContext';

const negative1 = -1;

export default function RecipeDetails({ match: { url } }) {
  const { setinProgress, setEParalelo } = useContext(MyContext);
  const [info, setInfo] = useState({});
  const [renderVideo, setRenderVideo] = useState('');
  useEffect(() => {
    const requestAPI = async () => {
      const arrayUrl = url.split('/');
      const drinkOrFood = arrayUrl[1];
      const urlNumber = arrayUrl[2];

      const urlMeals = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${urlNumber}`;
      const urlDrink = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${urlNumber}`;
      const response = await fetch(drinkOrFood === 'meals' ? urlMeals : urlDrink);
      const result = await response.json();
      setInfo(result[drinkOrFood][0]);
      setRenderVideo(drinkOrFood);
      setinProgress(result[drinkOrFood][0]);
    };
    requestAPI();
  }, [url]);

  const getIngredientsAndMeasures = (obj, prefix) => {
    const array = [];
    Object.entries(obj).forEach((element) => {
      if (element[0].startsWith(prefix) && element[1] !== '' && element[1] !== null) {
        array.push(element[1]);
      }
    });
    return array;
  };

  const ArrayIngredients = getIngredientsAndMeasures(info, 'strIngredient');
  const ArrayMeasures = getIngredientsAndMeasures(info, 'strMeasure');

  const createIngredientsAndMeasuresObj = () => {
    const newArray = [];
    let newObj = {};
    ArrayIngredients.forEach((element, index) => {
      newObj[element] = ArrayMeasures[index];
      newArray.push(newObj);
      newObj = {};
    });
    return newArray;
  };

  const ingredientsAndMeasures = createIngredientsAndMeasuresObj();
  // ************* MOCK PROGRESSO *************** //
  const history = useHistory();
  const redirecttoProgress = () => {
    if (url.includes('/drinks')) {
      setEParalelo([]);
      history.push(`${url}/in-progress`);
    }
    if (url.includes('/meals')) {
      history.push(`${url}/in-progress`);
    }
  };
  const redirecttoProgress2 = () => {
    console.log(info);
  };
    // ************* MOCK PROGRESSO *************** //

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ info.strDrinkThumb || info.strMealThumb }
        alt={ info.idDrink || info.idMeal }
      />
      <h3 data-testid="recipe-title">{info.strDrink || info.strMeal}</h3>
      <h4 data-testid="recipe-category">{info.strAlcoholic || info.strCategory}</h4>
      <ul>
        {
          ingredientsAndMeasures.map((ingredient, index) => (
            <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              {`${Object.keys(ingredient)[0]} -  ${Object.values(ingredient)[0]}`}
            </li>
          ))
        }
      </ul>
      <p data-testid="instructions">{info.strInstructions}</p>

      {
        renderVideo === 'meals'
          && (
            <div className="video-responsive">
              <iframe
                data-testid="video"
                width="853"
                height="480"
                src={ `https://www.youtube.com/embed/${info.strYoutube.split('=').slice(negative1).pop()}` }
                frameBorder="0"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          )
      }
      {/* // ************* MOCK PROGRESSO *************** // */}

      <button type="button" onClick={ () => redirecttoProgress() }>progess</button>
      <button type="button" onClick={ () => redirecttoProgress2() }>progess2</button>
      {/* // ************* MOCK PROGRESSO *************** // */}

    </div>
  );
}
RecipeDetails.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};
