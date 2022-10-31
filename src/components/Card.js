import React from 'react';
import PropTypes from 'prop-types';
import './componentsCss/card.css';
import { useHistory } from 'react-router-dom';

export default function Card({ nome, srcImg, index, id }) {
  const history = useHistory();

  const redirectDetails = (idVariavel) => {
    if (history.location.pathname === '/meals') {
      history.push(`/meals/${idVariavel}`);
    }
    if (history.location.pathname === '/drinks') {
      history.push(`/drinks/${idVariavel}`);
    }
  };
  return (
    <div
      aria-hidden
      role="button"
      onClick={ () => redirectDetails(id) }
      className="card"
      key={ Math.random() }
      data-testid={ `${index}-recipe-card` }
    >
      <h4
        key={ Math.random() }
        data-testid={ `${index}-card-name` }
      >
        {nome}
      </h4>
      <img
        key={ Math.random() }
        src={ srcImg }
        alt="img"
        data-testid={ `${index}-card-img` }
      />
    </div>
  );
}

Card.propTypes = {
  srcImg: PropTypes.string,
  nome: PropTypes.string,
}.isRequired;
