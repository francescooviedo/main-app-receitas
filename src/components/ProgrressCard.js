import React, { useContext, useState } from 'react';
import './inProgressCard.css';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MyContext from '../Context/MyContext';

export default function ProgrressCard({
  img,
  title,
  category,
  instructions,
  ingredients,
  id,
}) {
  const [compartilhou, setcompartilhou] = useState(false);
  const { setEParalelo } = useContext(MyContext);
  const { location: { pathname } } = useHistory();
  const handleChange = (e) => {
    const localStorageItem = JSON.parse(localStorage.getItem(id));
    localStorageItem[1].forEach((element) => {
      if (element.ingredient === e.name) {
        element.isChecked = !element.isChecked;
      }
    });
    localStorage.setItem(id, JSON.stringify(localStorageItem));
    setEParalelo(localStorageItem);
  };
  const clickBotao = async (e) => {
    console.log(e);
    if (e === 'compartilhar') {
      const path = pathname.replace('/in-progress', '');
      await navigator.clipboard.writeText(`http://localhost:3000${path}`);
      setcompartilhou(true);
    }
  };
  return (
    <div>
      <h4
        data-testid="recipe-title"
      >
        {title}
      </h4>
      <h4
        data-testid="recipe-category"
      >
        {category}
      </h4>
      <img
        data-testid="recipe-photo"
        src={ img }
        alt="img"
        width="100"
      />
      <p
        data-testid="instructions"
      >
        {instructions}
      </p>
      <div className="ingredientes">
        {ingredients.map((ingrediente, index) => (

          <label
            htmlFor={ ingrediente.ingredient }
            key={ Math.random() }
            data-testid={ `${index}-ingredient-step` }
            className={ ingrediente.isChecked ? 'checado' : 'naochecado' }
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
      <button
        name="compartilhar"
        onClick={ (e) => clickBotao(e.target.name) }
        data-testid="share-btn"
        type="button"
      >
        compartilhar
      </button>
      <button
        name="favorite"
        onClick={ (e) => clickBotao(e.target.name) }
        data-testid="favorite-btn"
        type="button"
      >
        favorite
      </button>
      <button
        name="finish"
        onClick={ (e) => clickBotao(e.target.name) }
        data-testid="finish-recipe-btn"
        type="button"
      >
        finish
      </button>
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
