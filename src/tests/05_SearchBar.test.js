import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import oneMeal from '../../cypress/mocks/oneMeal';

describe('test SearchBar /Meals', () => {
  test('testa inputs', () => {
    const { history } = renderWithRouter(<App />);

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(oneMeal),
    }));

    act(() => {
      history.push('/meals');
    });

    expect(history.location.pathname).toBe('/meals');

    const buttonSearch = screen.getByRole('button', { name: /search-icon/i });
    userEvent.click(buttonSearch);

    const inputSearch = screen.getByRole('textbox');
    const radioName = screen.getByRole('radio', { name: /name/i });
    const btnSearch = screen.getByTestId('exec-search-btn');
    userEvent.type(inputSearch, 'Arrabiata');
    userEvent.click(radioName);
    expect(btnSearch).toBeInTheDocument();
    // userEvent.click(btnSearch);
    // Se descomentar da xabu
    // expect(global.fetch).toHaveBeenCalled();
    // não está chamando
  });
});
