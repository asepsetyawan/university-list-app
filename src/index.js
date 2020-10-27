import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from 'react-helmet'
import { ApolloProvider } from '@apollo/client';

import client from './apolloClient'
import './index.css';
import Routes from './routes';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Helmet>
        <link rel="stylesheet" href="https://cdn.rawgit.com/Chalarangelo/mini.css/v3.0.1/dist/mini-default.min.css" />
      </Helmet>
      <Routes />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
