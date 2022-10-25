import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from '../pages/Profile';
import renderWithProvider from '../helpers/renderWithProvider';

describe('Profile Tests', () => {
  test('If the buttons are in the page:', () => {
    renderWithProvider(<Profile />);
    const doneRecipesBtn = screen.getByTestId('profile-done-btn');
    const favoriteRecipesBtn = screen.getByTestId('profile-favorite-btn');
    const logout = screen.getByTestId('profile-logout-btn');
    const email = screen.getByTestId('profile-email');

    expect(doneRecipesBtn).toBeInTheDocument();
    expect(favoriteRecipesBtn).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
  test('If the done-recipe link are correct:', () => {
    renderWithProvider(<Profile />);
    const doneRecipesBtn = screen.getByTestId('profile-done-btn');

    userEvent.click(doneRecipesBtn);

    expect(screen.getByText(/done recipes/i)).toBeInTheDocument();
  });
  test('If the favorite-recipe link are correct:', () => {
    renderWithProvider(<Profile />);
    const favoriteRecipesBtn = screen.getByTestId('profile-favorite-btn');

    userEvent.click(favoriteRecipesBtn);

    expect(screen.getByText(/favorite recipes/i)).toBeInTheDocument();
  });
  test('If the logout link are correct:', () => {
    renderWithProvider(<Profile />);
    const logout = screen.getByTestId('profile-logout-btn');

    userEvent.click(logout);

    const email = screen.getByTestId('profile-email');

    expect(email).toBeInTheDocument();
  });
});
