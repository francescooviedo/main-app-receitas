import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Login from '../pages/Login';
import renderWithProvider from '../helpers/renderWithProvider';

beforeEach(() => { renderWithProvider(<Login />); });
const EMAIL_TEST_ID = 'email-input';
const PASSWORD_TEST_ID = 'password-input';
const BUTTON_TEST_ID = 'login-submit-btn';
const userMock = {
  email: 'example@example.com',
  password: '1234567',
};
describe('Login Tests', () => {
  test('if the Login componens exists:', () => {
    const emailInput = screen.getByTestId(EMAIL_TEST_ID);
    const passwordInput = screen.getByTestId(PASSWORD_TEST_ID);
    const submitButton = screen.getByTestId(BUTTON_TEST_ID);
    const emailText = screen.getByRole('heading', {
      name: /email/i,
    });
    const passwordText = screen.getByRole('heading', {
      name: /password/i,
    });
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(emailText).toBeInTheDocument();
    expect(passwordText).toBeInTheDocument();
  });
  test('if the Login componens work as expected:', () => {
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByTestId(PASSWORD_TEST_ID);
    const buttonSubmit = screen.getByRole('button', {
      name: /enter/i,
    });
    userEvent.type(passwordInput, userMock.password);
    userEvent.type(emailInput, userMock.email);
    expect(passwordInput.value).toBe('1234567');
    expect(emailInput.value).toBe('example@example.com');
    expect(buttonSubmit).not.toBeDisabled();
  });
  test('if button is disabled with wrong inputs:', () => {
    const emailInput = screen.getByRole('textbox');
    userEvent.type(emailInput, 'exampleexamplecom');

    const passwordInput = screen.getByTestId(PASSWORD_TEST_ID);
    const buttonSubmit = screen.getByRole('button', {
      name: /enter/i,
    });
    userEvent.type(passwordInput, '123');
    expect(buttonSubmit).toBeDisabled();
  });
});
describe('02 button functions:', () => {
  test('if button is redirecting:', () => {
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByTestId(PASSWORD_TEST_ID);
    const buttonSubmit = screen.getByRole('button', {
      name: /enter/i,
    });
    userEvent.type(passwordInput, userMock.password);
    userEvent.type(emailInput, userMock.email);
    userEvent.click(buttonSubmit);
  });
});
