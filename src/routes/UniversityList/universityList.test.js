import { render, screen } from '@testing-library/react'
import { ApolloProvider } from '@apollo/client';
import client from '../../apolloClient'

import UniversityList from './universityListView'

test('loads and displays university', () => {
    render(<UniversityList />)

    expect(screen.getByRole('heading')).toHaveTextContent('University Lists')
})