import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import {setContext} from 'apollo-link-context';
import Header from './components/Header/header';
import Pages from './components/index';

const App = () => {
  const uri = "http://localhost:4000/api";
  const cache = new InMemoryCache();
  const link = createHttpLink({uri});

  const authLink = setContext((_, { headers }) => 
    ({ headers: {
        ...headers,
        authorization: localStorage.getItem('token') || ''
      }
    })
   );
  
  const client = new ApolloClient({
    link: authLink.concat(link),
    cache,
    resolvers: {},
    connectToDevTools: true
  });

  return (
    <ApolloProvider client={client}>
      <Header />
      <BrowserRouter>
        <Pages />
      </BrowserRouter> 
    </ApolloProvider>
      
  );
}

export default App;