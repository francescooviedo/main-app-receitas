import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../Context/MyContext';

function Provider({ children }) {
  const [radio, setRadio] = useState('');
  const [inputSearch, setInputSearch] = useState('');

  const handleChangeRadio = ({ target }) => {
    setRadio(target.value);
  };
  const handleChange = ({ target }) => {
    setInputSearch(target.value);
  };

  const contextValue = useMemo(() => ({
    radio,
    handleChange,
    inputSearch,
    setInputSearch,
    handleChangeRadio,

  }), [radio, inputSearch]);

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
