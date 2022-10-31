import React, { useEffect } from 'react';
import Header from '../components/Header';
// import MyContext from '../Context/MyContext';
// const {} = useContext(MyContext)

export default function FavoriteRecipes() {
  useEffect(() => {
    const favStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favStorage === null) {
      console.log('vazio');
      setFavoritas(false);
    }
    if (favStorage !== null) {
      console.log('tem coisa');
      setFavoritas(true);
    }
  }, []);
  return (
    <div>
      <Header header profile search={ false } title="Favorite Recipes" />
      <div>
        <button
          type="button"
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-meal-btn"
        >
          Meals
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </div>
    </div>
  );
}
