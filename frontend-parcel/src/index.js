import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { globalStyle } from './styles/globals'
import { ApolloProvider } from '@apollo/client/react';
import App from './app'
import {client } from './ApolloProvider'

ReactDOM.render(
    <ApolloProvider client={client}>
        <ThemeProvider theme={globalStyle}>
            <App />
        </ThemeProvider>
    </ApolloProvider>,
  document.getElementById('root'),
)
