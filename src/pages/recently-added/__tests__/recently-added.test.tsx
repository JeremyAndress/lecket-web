import React from 'react';
import { render, screen } from '@testing-library/react';
import Movies from '../index';
import { moviesMock } from '../../../__mocks__/movies';

describe('Recently-added', () => {
  it('renders recently added heading', () => {
    render(<Movies />);
    const menuTitle = screen.getByText(/recently added/i);
    expect(menuTitle).toBeInTheDocument();
  });

  it("Check if movie's items is the correct", () => {
    const { container } = render(<Movies movies={moviesMock} />);
    const items = container.querySelectorAll('div.most-watches-item');
    expect(items?.length).toBe(2);
    const firstTitle = items[0].querySelector('h4.primary-color');
    const secondTitle = items[1].querySelector('h4.primary-color');
    expect(firstTitle?.textContent).toBe('Movie Test 1');
    expect(secondTitle?.textContent).toBe('Movie Test 2');
  });

  it('renders movies and getByRole', () => {
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
