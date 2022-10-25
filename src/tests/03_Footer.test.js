import React from 'react';
import { screen } from '@testing-library/react';
import Footer from '../components/Footer';
import renderWithProvider from '../helpers/renderWithProvider';

beforeEach(() => { renderWithProvider(<Footer />); });

describe('Footer Tests', () => {
  test('If the buttons are in the page:', () => {
    const drinkBtn = screen.getByTestId('drinks-bottom-btn');
    const mealBtn = screen.getByTestId('meals-bottom-btn');

    expect(drinkBtn).toBeInTheDocument();
    expect(mealBtn).toBeInTheDocument();
  });
});
