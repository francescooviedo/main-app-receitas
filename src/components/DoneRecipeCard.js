import React from 'react';
import { Link } from 'react-router-dom';
import ShareButton from './ShareButton';
import './componentsCss/DoneRecipeCard.css';
import FavoriteButton from './FavoriteButton';

export default function DoneRecipeCard({ food: meals }) {
  return (
    meals.map((receita, index) => (
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
      bg-vesuvius-400
      "
        key={ Math.random() }
      >
        <div className="bg-vesuvius-300 py-1 rounded my-1 ">
          <Link
            to={ receita.type === 'meal'
              ? `/meals/${receita.id}`
              : `/drinks/${receita.id}` }
          >
            <img
              className="mx-auto bg-vesuvius-300 py-1 rounded my-1"
              width="250px"
              src={ receita.image }
              alt="Imagem da receita"
              data-testid={ `${index}-horizontal-image` }
            />
          </Link>
        </div>
        <Link
          to={ receita.type === 'meal'
            ? `/meals/${receita.id}`
            : `/drinks/${receita.id}` }
        >
          <h5
            className="text-vesuvius-700 bg-vesuvius-300 py-1 rounded my-1"
            data-testid={ `${index}-horizontal-name` }
          >
            { receita.name }
          </h5>
        </Link>

        <div className="done-recipe-describe">
          <div className="bg-vesuvius-300 py-1 rounded my-1 text-vesuvius-700">
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              { receita.alcoholicOrNot === ''
                ? `${receita.nationality} - ${receita.category}`
                : receita.alcoholicOrNot }
            </p>
          </div>

          <p
            className="bg-vesuvius-300 py-1 rounded my-1 text-vesuvius-700"
            data-testid={ `${index}-horizontal-done-date` }
          >
            { receita.doneDate }
          </p>

          <div className="bg-vesuvius-300 py-1 rounded my-1 text-vesuvius-700">
            {
              receita.tags?.map((tag) => (
                <p
                  key={ tag }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  { tag }
                </p>
              ))
            }
          </div>
        </div>
        <div
          className="grid grid-cols-2 gap-4
        content-evenly bg-vesuvius-300 py-1 rounded"
        >
          <ShareButton
            dataId={ `${index}-horizontal-share-btn` }
            URL={ receita.type === 'meal'
              ? `/meals/${receita.id}`
              : `/drinks/${receita.id}` }
          />
          <FavoriteButton
            dataId={ `${index}-horizontal-favorite-btn` }
            receita={ receita }
          />
        </div>
      </div>
    ))
  );
}
