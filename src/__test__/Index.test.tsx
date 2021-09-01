/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders discover heading', () => {
    render(<Home />)
    const menuTitle = screen.getByText(/discover/i)
    expect(menuTitle).toBeInTheDocument();
  })
})
