import { ApolloClient } from 'apollo-client';
import {HttpLink} from'apollo-link-http';
import {InMemoryCache} from'apollo-cache-inmemory';
//import { ApolloLink, concat } from 'apollo-link';

export const ngoCommandApolloClient = new ApolloClient({
  link:   new HttpLink({ uri: 'https://localhost:5007/graphql/' }),
  cache: new InMemoryCache()
});
