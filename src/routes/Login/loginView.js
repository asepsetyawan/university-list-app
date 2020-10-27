import React, {useState} from 'react'

import { gql, useMutation } from '@apollo/client';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
      Login (email: $email, password: $password) {
        accessToken
      }
  }
`;

const LoginView = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginMutate, 
        { data: mutationLoginData, loading: mutationLoading, error: mutationError }] = useMutation(LOGIN_MUTATION);

    const handleChangeEmail = (e) => { 
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        loginMutate({ variables: { email, password } });
    }

    if (mutationLoginData) {
        const token = mutationLoginData.Login.accessToken
        if (token) {
            localStorage.setItem('user-token', token)
            window.location.href= '/'
        }
    }

    if (mutationLoading) {
        return <h2>Loading...</h2>
    }

    if (mutationError) {
        return <h3>Opps something when wrong!</h3>
    }

    return (
        <div className="center-content">
            <h1 className="u-center">Login</h1>
            <form onSubmit={e => {e.preventDefault();handleSubmit()}}>
                <div className="input-group vertical">
                    <label>Email</label>
                    <input type="text" id="email" placeholder="Username" onChange={handleChangeEmail} />
                    <label>Password</label>
                    <input type="password" id="password" placeholder="Password" onChange={handleChangePassword} />
                    <button type="submit" className="primary">Login</button>
                </div>
            </form>
            
        </div>
    )
}

export default LoginView