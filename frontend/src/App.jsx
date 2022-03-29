import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from './components/Header/header';
import Pages from './components/index';

const App = () => {
  const uri = "http://localhost:4000/api";
  const cache = new InMemoryCache();
  
  const client = new ApolloClient({
    uri,
    cache,
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