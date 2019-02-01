import { ApolloClient } from 'apollo-client';
import {HttpLink} from'apollo-link-http';
import {InMemoryCache} from'apollo-cache-inmemory';
//import { ApolloLink, concat } from 'apollo-link';

export const userCommandApolloClient = new ApolloClient({
  link : new HttpLink({uri: 'https://localhost:5001/graphql/'}),
  cache: new InMemoryCache(),
  defaultOptions: {query: {fetchPolicy: "cache-only"}}
});