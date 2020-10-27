import { render, screen } from '@testing-library/react'
import { ApolloProvider } from '@apollo/client';
import client from '../../apolloClient'

import Register from './registerView'

test('loads and displays register', () => {
    render(
        <ApolloProvider client={client}>
            <Register />
        </ApolloProvider>
    )

    expect(screen.getByRole('heading')).toHaveTextContent('Register')
    expect(screen.getByRole('button')).toBeEnabled()
})