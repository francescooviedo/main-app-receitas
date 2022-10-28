import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../Context/MyContext';
import Card from '../components/Card';
import CategoryFilter from '../components/CategoryFilter';
import './Recipes.css';

export default function Recipes() {
  const { location: { pathname } } = useHistory();
  const { APIMeals, APIDrinks, categoryDrink, categoryMeal } = useContext(MyContext);
  const renderAlert = APIMeals === null || APIDrinks === null;
  const functionSelector = pathname === '/meals';
  const doze = 12;

  return (
    <div>
      <Header header profile search title={ functionSelector ? 'Meals' : 'Drinks' } />
      {functionSelector && <CategoryFilter apiType={ categoryMeal } />}
      {!functionSelector && <CategoryFilter apiType={ categoryDrink } />}
      <div className="RecipesContainer">

        {!renderAlert
        && (
          <div className="receitasContainer">
            {
              functionSelector && APIMeals.slice(0, doze).map((receita, index) => (
                <Card
                  id={ receita.idMeal }
                  key={ Math.random() }
                  nome={ receita.strMeal }
                  srcImg={ receita.strMealThumb }
                  index={ index }
                />
              ))
            }

            {
              !functionSelector
           && APIDrinks.slice(0, doze).map((receita, index) => (
             <Card
               id={ receita.idDrink }
               key={ Math.random() }
               nome={ receita.strDrink }
               srcImg={ receita.strDrinkThumb }
               index={ index }
             />
           ))
            }
          </div>
        )}
        {renderAlert
      && global.alert('Sorry, we haven\'t found any recipes for these filters.')}

      </div>
      <Footer />
    </div>
  );
}
Recipes.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
};
