import React, { useState } from 'react';
import DoneRecipeCard from '../components/DoneRecipeCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import mockDoneRecipes from '../tests/mocks/mockDoneRecipes';

export default function DoneRecipes() {
  const [filter, setFilter] = useState('all');
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];

  const renderRecipes = filter === 'all'
    ? doneRecipes
    : doneRecipes.filter((meal) => meal.type === filter);

  const key = 'doneRecipes';
  window.localStorage.setItem(key, JSON.stringify(mockDoneRecipes));
  const storage = localStorage.getItem('doneRecipes');
  console.log(storage);

  return (
    <div className="bg-white text-center">
      <Header header profile search={ false } title="Done Recipes" />
      <div className="grid grid-cols-3 my-2">
        <button
          className="
         border-2
         border-vesuvius-500
         bg-white
        hover:bg-vesuvius-700
         font-bold
         mx-1
         py-1
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
         mx-1
         py-1
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
              <p>Sem receitas finalizadas</p>
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
