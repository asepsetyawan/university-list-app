import { render, screen } from '@testing-library/react'
import { ApolloProvider } from '@apollo/client';
import client from '../../apolloClient'

import Login from './loginView'

test('loads and displays login', () => {
    render(
        <ApolloProvider client={client}>
            <Login />
        </ApolloProvider>
    )

    expect(screen.getByRole('heading')).toHaveTextContent('Login')
    expect(screen.getByRole('button')).toBeEnabled()
})