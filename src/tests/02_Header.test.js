import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('test header component', () => {
  test('', () => {
    render(
      <MemoryRouter>
        <Header header title="test" search profile />
      </MemoryRouter>,
    );
    const pageTitle = screen.getByTestId('page-title');
    const searchBtn = screen.getByRole('img', {
      name: /search-icon/i,
    });
    const profileIcon = screen.getByRole('img', {
      name: /profile-icon/i,
    });
    expect(pageTitle).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
    expect(profileIcon).toBeInTheDocument();
    userEvent.click(profileIcon);
  });
  test('', () => {
    render(
      <MemoryRouter>
        <Header header title="test" search profile />
      </MemoryRouter>,
    );
    const searchBtn = screen.getByRole('img', {
      name: /search-icon/i,
    });
    expect(searchBtn).toBeInTheDocument();
    userEvent.click(searchBtn);
    const textArea = screen.getByRole('textbox');
    expect(textArea).toBeInTheDocument();
    userEvent.type(textArea, 'test');
    expect(textArea.value).toBe('test');
  });
});
