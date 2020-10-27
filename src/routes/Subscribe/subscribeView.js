import React, {useState} from 'react';

import { gql, useMutation } from '@apollo/client';

const SUBSCRIBE_MUTATION = gql`
  mutation SubscibeMutation($email: String!) {
      Subscribe (email: $email) 
  }
`;

const SubscribeView = () => {
    const [email, setEmail] = useState('')

    const [subscribeMutate, 
        { data: mutationSubscribeData, loading: mutationLoading, error: mutationError }] = useMutation(SUBSCRIBE_MUTATION);

    const handleChangeEmail = e => {
        setEmail(e.target.value)
    }

    const handleSubmit = () => {
        subscribeMutate({ variables: { email }});
    }

    if (mutationSubscribeData) {
        const isSuccessSubscribe = mutationSubscribeData.Subscribe
        if (isSuccessSubscribe) return <h2>Success Subscribe</h2>
    }

    if (mutationLoading) {
        return <h2>Loading...</h2>
    }

    if (mutationError) {
        return <h3>Opps something when wrong!</h3>
    }

    return (
        <div className="center-content">
            <h2 className="u-center">Subscribe</h2>
            <form onSubmit={e => {e.preventDefault();handleSubmit()}}>
                <div className="input-group vertical">
                    <label>Email Address</label>
                    <input type="text" id="email" placeholder="Username" onChange={handleChangeEmail} />
                    <button type="submit" className="primary">Subscribe</button>
                </div>
            </form>
        </div>
    )
}

export default SubscribeView;