import React, {useState} from 'react'
import { gql, useMutation } from '@apollo/client';

const REGISTER_MUTATION = gql`
  mutation RegisterMutation($name: String!, $email: String!, $password: String!) {
    Register(name: $name, email: $email, password: $password)
  }
`;

const RegisterView = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [registerMutate, 
        { data: mutationRegisterData, loading: mutationLoading, error: mutationError }] = useMutation(REGISTER_MUTATION);

    const handleChangeName = e => {
        setName(e.target.value)
    }

    const handleChangeEmail = e => { 
        setEmail(e.target.value)
    }

    const handleChangePassword = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        registerMutate({ variables: { name, email, password }});
    }

    if (mutationRegisterData) {
        const isSuccessRegister = mutationRegisterData.Register
        if (isSuccessRegister) return <h2>Success Register, <a href="/login">Login</a></h2>
    }

    if (mutationLoading) {
        return <h2>Loading...</h2>
    }

    if (mutationError) {
        return <h3>Opps something when wrong!</h3>
    }

    return (
        <div className="center-content">
            <h1 className="u-center">Register</h1>
            <form onSubmit={e => {e.preventDefault();handleSubmit()}}>
                <div className="input-group vertical">
                    <label>Name</label>
                    <input type="text" id="Name" placeholder="Name" onChange={handleChangeName} />
                    <label>Email</label>
                    <input type="email" id="Username" placeholder="Email" onChange={handleChangeEmail} />
                    <label>Password</label>
                    <input type="password" id="Username" placeholder="Password" onChange={handleChangePassword} />

                    <button className="primary" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
        
    )
}

export default RegisterView