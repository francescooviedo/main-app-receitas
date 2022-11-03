import React, { useContext, useEffect, useState } from 'react';
import './componentsCss/inProgressCard.css';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MyContext from '../Context/MyContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

export default function ProgrressCard({
  img,
  title,
  category,
  instructions,
  ingredients,
  id,
  type,
  nationality,
  alcoholicOrNot,

}) {
  const [isDone, setIsDone] = useState(true);
  const [isDone2, setIsDone2] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const [compartilhou, setcompartilhou] = useState(false);
  const { setEParalelo } = useContext(MyContext);
  const { location: { pathname } } = useHistory();
  const history = useHistory();

  useEffect(() => {
    const arrFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log('rerender');
    if (arrFavorite !== null) {
      arrFavorite.forEach((favorito) => {
        if (favorito.id === id) {
          setFavorite(true);
        }
      });
    } else {
      setFavorite(false);
    }
  }, []);
  useEffect(() => {
    const a = ingredients.filter((ingredient) => ingredient.isChecked !== true);
    if (a.length === 0) {
      setIsDone(false);
    } else {
      setIsDone(true);
    }
  }, [isDone2]);
  const redirectDone = '/done-recipes';
  const handleChange = (e) => {
    setIsDone2(!isDone2);
    const localStorageItem = JSON.parse(localStorage.getItem(id));
    console.log(localStorageItem);
    localStorageItem[1].forEach((element) => {
      if (element.ingredient === e.name) {
        element.isChecked = !element.isChecked;
      }
    });
    localStorage.setItem(id, JSON.stringify(localStorageItem));
    setEParalelo(localStorageItem);
  };

  const clickBotao = async (e) => {
    if (e === 'compartilhar') {
      const path = pathname.replace('/in-progress', '');
      await navigator.clipboard.writeText(`http://localhost:3000${path}`);
      setcompartilhou(true);
    }
    if (e === 'finish') {
      history.push(redirectDone);
    }
  };
  const favoriteButton = () => {
    if (favorite === true) {
      const removeFav = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const favoritosFinal = removeFav.filter((favorito) => favorito.id !== id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoritosFinal));
      console.log(favoritosFinal);
      setFavorite(false);
    }
    if (favorite === false) {
      const addFav = JSON.parse(localStorage.getItem('favoriteRecipes'));

      if (addFav !== null) {
        const objetoFavorito = {
          id,
          type,
          nationality,
          category,
          alcoholicOrNot,
          name: title,
          image: img,
        };
        const addFav1 = [...addFav, objetoFavorito];
        localStorage.setItem('favoriteRecipes', JSON.stringify(addFav1));
      }
      if (addFav === null) {
        const objetoFavorito = {
          id,
          type,
          nationality,
          category,
          alcoholicOrNot,
          name: title,
          image: img,
        };
        const paralela = [objetoFavorito];
        localStorage.setItem('favoriteRecipes', JSON.stringify(paralela));
      }
      setFavorite(true);
    }
  };
  const clickBotaoFinish = () => {
    const done = JSON.parse(localStorage.getItem('doneRecipes'));
    if (done === null) {
      console.log('vazio');
      const objetocomida = {
        id,
        type,
        nationality,
        category,
        alcoholicOrNot,
        name: title,
        image: img,
      };
      const paralela = [objetocomida];

      localStorage.setItem('doneRecipes', JSON.stringify(paralela));
      history.push(redirectDone);
    }
    if (done !== null) {
      console.log(done);
      const objetocomida = {
        id,
        type,
        nationality,
        category,
        alcoholicOrNot,
        name: title,
        image: img,
      };
      const addfinished = [...done, objetocomida];
      localStorage.setItem('doneRecipes', JSON.stringify(addfinished));
      history.push(redirectDone);
    }
  };
  return (
    <div className="px-2 flex-col bg-vesuvius-200">
      <h4
        className="text-vesuvius-700 text-center"
        data-testid="recipe-title"
      >
        {title}
      </h4>
      <h4
        className="text-vesuvius-600 text-center my-4"
        data-testid="recipe-category"
      >
        {category}
      </h4>
      <img
        className="mx-auto rounded my-4"
        data-testid="recipe-photo"
        src={ img }
        alt="img"
        width="100"
      />
      <p
        className="px-1 py-1 text-vesuvius-700"
        data-testid="instructions"
      >
        {instructions}
      </p>
      <div className="ingredientes">
        {ingredients.map((ingrediente, index) => (

          <label
            htmlFor={ ingrediente.ingredient }
            key={ index }
            data-testid={ `${index}-ingredient-step` }
            className={
              ingrediente.isChecked
                ? 'accent-vesuvius-700 line-through decoration-vesuvius-900 text-vesuvius-800'
                : 'text-vesuvius-900'
            }
          >
            <input
              type="checkbox"
              checked={ ingrediente.isChecked }
              onChange={ (e) => handleChange(e.target) }
              name={ ingrediente.ingredient }
              id={ ingrediente.ingredient }
            />
            <span>
              {`${ingrediente.quantity} ${ingrediente.ingredient}`}
            </span>
          </label>
        ))}
      </div>
      <div className="flex py-3">
        <button
          className="px-5"
          name="compartilhar"
          onClick={ (e) => clickBotao(e.target.name) }
          data-testid="share-btn"
          type="button"
        >
          <img
            src={ shareIcon }
            alt="search-icon"
          />
        </button>
        <button
          className="px-4"
          name="favorite"
          onClick={ favoriteButton }
          type="button"
        >
          <img
            data-testid="favorite-btn"
            name="favorite"
            src={ favorite ? blackHeartIcon : whiteHeartIcon }
            alt="favoriteIcon"
          />
        </button>
        <button
          className={ isDone
            ? 'text-vesuvius-200 bg-vesuvius-800/30 rounded px-1 py-1'
            : 'bg-vesuvius-500 hover:bg-vesuvius-700 text-white px-1 py-1 rounded focus:outline-none focus:shadow-outline text-vesuvius-700' }
          name="finish"
          onClick={ clickBotaoFinish }
          data-testid="finish-recipe-btn"
          type="button"
          disabled={ isDone }
        >
          Finish Recipe
        </button>
      </div>
      {compartilhou && <h1>Link copied!</h1>}
    </div>
  );
}
ProgrressCard.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  img: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  instructions: PropTypes.string,
  ingredients: PropTypes.array,
  id: PropTypes.string,
}.isRequired;
