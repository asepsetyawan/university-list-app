import { gql, useQuery } from '@apollo/client';

const IS_LOGGGEDIN = gql`
  query ME {
    Me
  }
`;

const useAuth = () => {

    const authReturn = { loading: false, isLogin: false, error: false };

    const { loading, error } = useQuery(IS_LOGGGEDIN);

    if (loading) return {...authReturn, loading: true};
    if (error) return {...authReturn, error: true}

    return { ...authReturn, isLogin: true}
}

export default useAuth
