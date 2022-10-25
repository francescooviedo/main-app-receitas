import React, { useContext } from 'react';
import {
  requestIngredient,
  requestNome,
  requestFirstLetter } from '../helpers/functionsAPI';
import MyContext from '../Context/MyContext';

export default function SearchBar() {
  const { radio, handleChangeRadio, inputSearch } = useContext(MyContext);
  const handleSearch = () => {
    console.log(inputSearch);
    console.log(radio);
    requestIngredient('chicken');
    requestNome('Arrabiata');
    requestFirstLetter('c');
  };

  return (
    <div>
      <label
        htmlFor="ingredient"
      >
        <input
          data-testid="ingredient-search-radio"
          type="radio"
          value="ingrediente"
          onChange={ handleChangeRadio }
          name={ radio }
          id="ingredient"
        />
        Ingredient
      </label>

      <label
        htmlFor="name"
      >
        <input
          data-testid="name-search-radio"
          type="radio"
          value="nome"
          onChange={ handleChangeRadio }
          name={ radio }
          id="name"
        />
        Name
      </label>

      <label
        htmlFor="firstletter"
      >
        <input
          data-testid="first-letter-search-radio"
          type="radio"
          value="primeira-letra"
          onChange={ handleChangeRadio }
          name={ radio }
          id="firstletter"
        />
        First letter
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleSearch }
      >
        Search
      </button>

    </div>
  );
}
