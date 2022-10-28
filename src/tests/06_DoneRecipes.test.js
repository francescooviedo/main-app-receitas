import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import mockDoneRecipes from './mocks/mockDoneRecipes';

describe('Done Recipe Tests', () => {
  const BTNMEALS = 'filter-by-meal-btn';
  const key = 'doneRecipes';
  const BTNDRINKS = 'filter-by-drink-btn';
  const BTNALL = 'filter-by-all-btn';

  beforeEach(() => {
    window.localStorage.clear();
  });

  it('test button all, drinks and meals', () => {
    const { history } = renderWithRouter(<App />);
    window.localStorage.setItem(key, JSON.stringify(mockDoneRecipes));
    act(() => {
      history.push('/done-recipes');
    });
    expect(localStorage.getItem(key)).toEqual(JSON.stringify(mockDoneRecipes));

    const btnMeals = screen.getByTestId(BTNMEALS);
    userEvent.click(btnMeals);
    const describe = screen.getByText(/italian - vegetarian/i);
    expect(describe).toBeInTheDocument();

    const btnDrink = screen.getByTestId(BTNDRINKS);
    userEvent.click(btnDrink);
    expect(describe).not.toBeInTheDocument();

    const btnAll = screen.getByTestId(BTNALL);
    userEvent.click(btnAll);
    const drinkDesc = screen.getByText(/alcoholic/i);
    expect(drinkDesc).toBeInTheDocument();
  });
  it('test done recipes empty', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/done-recipes');
    });
    const receitas = screen.getByText(/sem receitas finalizadas/i);
    expect(receitas).toBeInTheDocument();
  });
});
