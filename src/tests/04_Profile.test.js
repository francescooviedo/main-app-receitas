import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

describe('Profile Tests', () => {
  it('Checking return from LocalStorage and clearing', () => {
    const { history } = renderWithRouter(<App />);
    const key = 'user';
    const mockData = { email: 'teste@teste.com' };

    window.localStorage.setItem(key, JSON.stringify(mockData));
    act(() => {
      history.push('/profile');
    });
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(mockData));

    const buttonLogout = screen.getByRole('button', { name: /logout/i });
    userEvent.click(buttonLogout);
  });
});
