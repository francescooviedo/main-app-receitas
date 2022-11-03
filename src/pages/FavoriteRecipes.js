import React, { useState } from 'react';
import DoneRecipeCard from '../components/DoneRecipeCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FavoriteRecipes() {
  const [filter, setFilter] = useState('all');
  const doneRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

  const renderRecipes = filter === 'all'
    ? doneRecipes
    : doneRecipes.filter((meal) => meal.type === filter);

  return (
    <div className="bg-vesuvius-200">
      <Header header profile search={ false } title="Favorite Recipes" />
      <div className="bg-vesuvius-300 rounded my-1">
        <button
          className="
         border-2
         border-vesuvius-500
         bg-white
        hover:bg-vesuvius-700
         font-bold
         py-1
         mx-1
          px-2 rounded
          focus:outline-none
           focus:shadow-outline
        text-vesuvius-700 "
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => {
            setFilter('all');
          } }
        >
          All
        </button>
        <button
          className="
         border-2
         border-vesuvius-500
         bg-white
        hover:bg-vesuvius-700
         font-bold
         py-1
         mx-1
          px-2 rounded
          focus:outline-none
           focus:shadow-outline
        text-vesuvius-700 "
          type="button"
          data-testid="filter-by-meal-btn"
          onClick={ () => {
            setFilter('meal');
          } }
        >
          Meals
        </button>
        <button
          className="
         border-2
         border-vesuvius-500
         bg-white
        hover:bg-vesuvius-700
         font-bold
         py-1
         mx-1
          px-2 rounded
          focus:outline-none
           focus:shadow-outline
        text-vesuvius-700 "
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => {
            setFilter('drink');
          } }
        >
          Drinks
        </button>
      </div>
      <section>
        { renderRecipes.length === 0
          ? (
            <div>
              <p>Sem receitas</p>
            </div>
          )
          : (
            <DoneRecipeCard
              food={ renderRecipes }
            />
          ) }
      </section>

      <Footer />
    </div>
  );
}
