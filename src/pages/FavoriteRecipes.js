import React from 'react';
import Header from '../components/Header';
// import MyContext from '../Context/MyContext';
// const {} = useContext(MyContext)

export default function FavoriteRecipes() {
  return (
    <div>
      <Header header profile search={ false } title="Favorite Recipes" />
    </div>
  );
}
