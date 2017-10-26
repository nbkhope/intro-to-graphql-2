import React from 'react';
import ReactDOM from 'react-dom';
// Works with any FE framework (keeps the Apollo Store)
import ApolloClient from 'apollo-client';
// Integrates with React:
import { ApolloProvider } from 'react-apollo';

import SongList from './components/SongList';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
