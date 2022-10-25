import React from 'react';
import { render } from '@testing-library/react';
import Provider from '../components/Provider';

function renderWithProvider(component) {
  return {
    ...render(
      <Provider>
        {component}
      </Provider>,
    ),
  };
}

export default renderWithProvider;
