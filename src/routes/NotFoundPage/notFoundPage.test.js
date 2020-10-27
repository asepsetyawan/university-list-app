import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from "react-router-dom";

import NotFound from './NotFoundPageView'

test('loads and displays not found page', () => {
    render(<Router><NotFound /></Router>)

    expect(screen.getByRole('heading')).toHaveTextContent('404 - Not Found!')
    expect(screen.getByRole('link')).toHaveTextContent('Go Home')
})