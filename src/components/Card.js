import React from 'react';
import PropTypes from 'prop-types';
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
      className="
      my-3
      mx-1
      max-w-sm
      rounded
      overflow-hidden
      shadow-lg
      text-center
      px-1
      py-2
      bg-vesuvius-200
      "
      aria-hidden
      role="button"
      onClick={ () => redirectDetails(id) }
      key={ Math.random() }
      data-testid={ `${index}-recipe-card` }
    >
      <img
        width="100px"
        heigth="100px"
        className="w-full rounded "
        key={ Math.random() }
        src={ srcImg }
        alt="img"
        data-testid={ `${index}-card-img` }
      />
      <h4
        className="text-vesuvius-900 text-base "
        key={ Math.random() }
        data-testid={ `${index}-card-name` }
      >
        {nome}
      </h4>
    </div>
  );
}

Card.propTypes = {
  srcImg: PropTypes.string,
  nome: PropTypes.string,
}.isRequired;
