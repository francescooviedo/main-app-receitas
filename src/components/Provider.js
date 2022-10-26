import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../Context/MyContext';

function Provider({ children }) {
  const [radio, setRadio] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [buttonDrink, setDrink] = useState(false);
  const [buttonMeal, setMeal] = useState(true);
  const [condicionalRender, setCondRender] = useState(false);
  const [API, setAPI] = useState([0, 1]);
  const handleChangeRadio = ({ target }) => {
    setRadio(target.value);
  };
  const handleChange = ({ target }) => {
    setInputSearch(target.value);
  };

  const contextValue = useMemo(() => ({
    API,
    setAPI,
    condicionalRender,
    setCondRender,
    buttonMeal,
    buttonDrink,
    setDrink,
    setMeal,
    radio,
    handleChange,
    inputSearch,
    setInputSearch,
    handleChangeRadio,

  }), [radio, inputSearch, buttonDrink, buttonMeal, API]);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
