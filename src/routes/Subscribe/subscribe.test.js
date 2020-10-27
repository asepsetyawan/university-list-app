import { render, screen } from '@testing-library/react'
import { ApolloProvider } from '@apollo/client';
import client from '../../apolloClient'

import Subscribe from './subscribeView'

test('loads and displays subscribe', () => {
    render(
        <ApolloProvider client={client}>
            <Subscribe />
        </ApolloProvider>
    )

    expect(screen.getByRole('heading')).toHaveTextContent('Subscribe')
    expect(screen.getByRole('button')).toBeEnabled()
})