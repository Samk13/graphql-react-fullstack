// import React from 'react'
// import App from './App'
import { createHttpLink } from 'apollo-link-http'
// import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000',
})
export const client = new ApolloClient({
  uri: httpLink,
  cache: new InMemoryCache()
});

// export default (
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>
// )
