import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('test header component', () => {
  test('', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/meals');
    });
    const buttonProfile = screen.getByRole('button', { name: /profile-icon/i });
    const buttonSearch = screen.getByRole('button', { name: /search-icon/i });

    expect(buttonProfile && buttonSearch).toBeInTheDocument();
    userEvent.click(buttonSearch);
    const radioIngredient = screen.getByText(/ingredient/i);
    userEvent.click(radioIngredient);
    userEvent.type(buttonSearch, 'chicken');
    userEvent.click(buttonSearch);
    userEvent.click(buttonProfile);
    expect(history.location.pathname).toBe('/profile');
  });
});
