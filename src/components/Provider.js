import React from 'react';
import PropTypes from 'prop-types';
import MyContext from '../Context/MyContext';

function Provider({ children }) {
  const teste = '';

  return (
    <MyContext.Provider value={ teste }>
      {children}
    </MyContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
