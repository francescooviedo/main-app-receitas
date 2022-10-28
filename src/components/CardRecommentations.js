import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Card({ nome, srcImg, index, id, type }) {
  return (
    <Link to={ `/${type}/${id}` }>
      <div
        aria-hidden
        role="button"
        className={ index > 1 ? 'cardRecommendation' : 'card' }
        key={ Math.random() }
        data-testid={ `${index}-recommendation-card` }
      >
        <h4
          key={ Math.random() }
          data-testid={ `${index}-recommendation-title` }
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
    </Link>
  );
}

Card.propTypes = {
  srcImg: PropTypes.string,
  nome: PropTypes.string,
}.isRequired;
