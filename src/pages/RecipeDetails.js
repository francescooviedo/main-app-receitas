import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const negative1 = -1;

export default function RecipeDetails({ match: { url } }) {
  const [info, setInfo] = useState({});
  const [renderVideo, setRenderVideo] = useState('');
  useEffect(() => {
    const requestAPI = async () => {
      // drinks  id = 11019
      // meals id = 52874
      const arrayUrl = url.split('/');
      const drinkOrFood = arrayUrl[1];
      const urlNumber = arrayUrl[2];

      const urlMeals = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${urlNumber}`;
      const urlDrink = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${urlNumber}`;
      const response = await fetch(drinkOrFood === 'meals' ? urlMeals : urlDrink);
      const result = await response.json();
      setInfo(result[drinkOrFood][0]);
      setRenderVideo(drinkOrFood);
      console.log(result);
    };
    requestAPI();
  }, [url]);

  const getIngredients = (obj, prefix) => {
    const ingredientsList = [];
    Object.entries(obj).forEach((element) => {
      if (element[0].startsWith(prefix) && element[1] !== '' && element[1] !== null) {
        ingredientsList.push(element[1]);
      }
    });
    return ingredientsList;
  };
  const ArrayIngredients = getIngredients(info, 'strIngredient');

  const getMeasures = (obj, prefix) => {
    const measuresList = [];
    Object.entries(obj).forEach((element) => {
      if (element[0].startsWith(prefix) && element[1] !== '' && element[1] !== null) {
        measuresList.push(element[1]);
      }
    });
    return measuresList;
  };
  const ArrayMeasures = getMeasures(info, 'strMeasure');

  const mesclaArray = () => {
    const newObj = [];
    ArrayIngredients.forEach((element, index) => {
      newObj[element] = ArrayMeasures[index];
    });
    console.log(newObj);
    return newObj;
  };
  const newArray = mesclaArray();
  console.log(newArray);

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ info.strDrinkThumb || info.strMealThumb }
        alt={ info.idDrink || info.idMeal }
      />
      <h3 data-testid="recipe-title">{info.strDrink || info.strMeal}</h3>
      <h4 data-testid="recipe-category">{info.strCategory}</h4>
      <ul>
        {
          for(i in newObj){
            return <li>newObj[i]</li>

          }
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

    </div>
  );
}
RecipeDetails.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};
