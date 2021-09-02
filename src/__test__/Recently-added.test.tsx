/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Movies from '../pages/recently-added';
import { moviesMock } from '../__mocks__/movies';

describe('Recently-added', () => {
  it('renders recently added heading', () => {
    render(<Movies />);
    const menuTitle = screen.getByText(/recently added/i);
    expect(menuTitle).toBeInTheDocument();
  });

  it('renders movies', () => {
    render(<Movies movies={moviesMock} />);
    const firstMovieTitle = screen.getByRole('heading', {
      name: 'Movie Test 1',
    });
    const secondtMovieTitle = screen.getByRole('heading', {
      name: 'Movie Test 2',
    });
    expect(firstMovieTitle).toBeInTheDocument();
    expect(secondtMovieTitle).toBeInTheDocument();
  });
});
