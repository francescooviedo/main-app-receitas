import React from 'react';
import { screen } from '@testing-library/react';
import Footer from '../components/Footer';
import renderWithProvider from '../helpers/renderWithProvider';

beforeEach(() => { renderWithProvider(<Footer />); });

describe('Login Tests', () => {
  test('If the button are in the page:', () => {
    const drinkBtn = screen.getByTestId('drinks-bottom-btn');
    const mealBtn = screen.getByTestId('meals-bottom-btn');

    expect(drinkBtn).toBeInTheDocument();
    expect(mealBtn).toBeInTheDocument();
  });
});
