import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
});

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById ('root'));

reportWebVitals();
