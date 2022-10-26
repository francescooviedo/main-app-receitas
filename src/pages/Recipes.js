import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../Context/MyContext';

export default function Recipes() {
  const history = useHistory();
  const { API } = useContext(MyContext);
  const renderAlert = API === null;
  const functionSelector = history.location.pathname === '/meals';
  const doze = 12;
  return (
    <div>
      <Header header profile search title={ functionSelector ? 'Meals' : 'Drinks' } />
      <Footer />
      {!renderAlert
        && <div>
          {functionSelector && API.slice(0, doze).map((receita, index) => (
            <div key={ Math.random() } data-testid={ `${index}-recipe-card` }>
              <h4
                key={ Math.random() }
                data-testid={ `${index}-card-name` }
              >
                {receita.strMeal}

              </h4>
              <img
                key={ Math.random() }
                src={ receita.strMealThumb }
                alt="img"
                data-testid={ `${index}-card-img` }
              />
            </div>
          ))}
          {!functionSelector
          && API.slice(0, doze).map((receita, index) => (
            <div key={ Math.random() } data-testid={ `${index}-recipe-card` }>
              <h4
                key={ Math.random() }
                data-testid={ `${index}-card-name` }
              >
                {receita.strDrink}
              </h4>
              <img
                key={ Math.random() }
                src={ receita.strDrinkThumb }
                alt="img"
                data-testid={ `${index}-card-img` }
              />
            </div>
          ))}
        </div>}
      {renderAlert
      && global.alert('Sorry, we haven\'t found any recipes for these filters.')}
    </div>
  );
}
Recipes.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
};
