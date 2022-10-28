import React from 'react';
import { Link } from 'react-router-dom';
import ShareButton from './ShareButton';

export default function DoneRecipeCard({ food: meals }) {
  // const history = useHistory();
  // const redirectToDetails = (id, type) => {
  //   if (type === 'meal') {
  //     history.push(`/meals/${id}`);
  //   } else {
  //     history.push(`/drinks/${id}`);
  //   }
  // };
  return (
    meals.map((receita, index) => (
      <div
        key={ Math.random() }
      >

        <Link
          to={ receita.type === 'meal'
            ? `/meals/${receita.id}`
            : `/drinks/${receita.id}` }
        >
          <h3 data-testid={ `${index}-horizontal-name` }>
            { receita.name }
          </h3>
        </Link>
        <Link
          to={ receita.type === 'meal'
            ? `/meals/${receita.id}`
            : `/drinks/${receita.id}` }
        >
          <img
            src={ receita.image }
            alt="Imagem da receita"
            data-testid={ `${index}-horizontal-image` }
          />
        </Link>

        <div className="done-recipe-describe">
          <div className="done-recipe-top">
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              { receita.alcoholicOrNot === ''
                ? `${receita.nationality} - ${receita.category}`
                : receita.alcoholicOrNot }
            </p>

            <ShareButton
              dataId={ `${index}-horizontal-share-btn` }
              URL={ receita.type === 'meal'
                ? `/meals/${receita.id}`
                : `/drinks/${receita.id}` }
            />
          </div>

          <p data-testid={ `${index}-horizontal-done-date` }>
            { receita.doneDate }
          </p>

          <div>
            {
              receita.tags.map((tag) => (
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
      </div>
    ))
  );
}

// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import ShareIcon from '../images/shareIcon.svg';

// function DoneRecipeCard({ recipe, index }) {
//   const pathToRecipeDetails = recipe.meals ? (
//     `/meals/${recipe.idMeal}`) : `/drinks/${recipe.idDrink}`;
//   console.log(recipe);
//   return (
//     <div>
//       <Link to={ pathToRecipeDetails }>
//         <img
//           key={ index }
//           height="200px"
//           width="200px"
//           data-testid={ `${index}-horizontal-image` }
//           src={ recipe.strDrinkThumb || recipe.strMealThumb }
//           alt="meals"
//         />
//       </Link>
//       <div>
//         <div>
//           <Link to={ pathToRecipeDetails }>
//             <h1 data-testid={ `${index}-horizontal-name` }>
//               {recipe.strMeal || recipe.strDrink}
//             </h1>
//           </Link>
//           <p data-testid={ `${index}-horizontal-top-text` }>
//             { recipe.meals ? (
//               `${recipe.strArea} ${recipe.strCategory}`
//             ) : recipe.strAlcoholic }
//           </p>
//         </div>
//         <div>
//           <p
//             data-testid={ `${index}-horizontal-done-date` }
//           >
//             {recipe.doneDate}
//             {/* doneDate data que terminou a */}
//           </p>
//         </div>
//         <div>
//           <p
//             data-testid={ `${index}-horizontal-share-btn` }
//             img
//             src={ ShareIcon }
//           >
//             Compartilhar receita
//           </p>
//           {/* Preciso instalar um import clipboard */}
//         </div>
//         <div>
//           { recipe.tags && recipe.tags.map((tagName) => (
//             <div
//               key={ tagName }
//               data-testid={ `${index}-${tagName}-horizontal-tag` }
//             >
//               {tag}
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }

// DoneRecipeCard.propTypes = {
//   recipe: PropTypes.shape({
//     alcoholicOrNot: PropTypes.string,
//     category: PropTypes.string,
//     doneDate: PropTypes.string,
//     id: PropTypes.string,
//     image: PropTypes.string,
//     name: PropTypes.string,
//     nationality: PropTypes.string,
//     tags: PropTypes.arrayOf(PropTypes.string),
//     type: PropTypes.string,
//   }).isRequired,
//   index: PropTypes.number.isRequired,
// };

// export default DoneRecipeCard;
