import { ApolloClient } from 'apollo-client';
import {HttpLink} from'apollo-link-http';
import {InMemoryCache} from'apollo-cache-inmemory';
//import { ApolloLink, concat } from 'apollo-link';


const httpLink = new HttpLink({ uri: 'https://localhost:5001/graphql/' });

export const userQueryApolloClient = new ApolloClient({
  link:  httpLink,
  cache: new InMemoryCache()
});
//const httpLink = new HttpLink({ uri: 'https://localhost:44397/graphql', 
                              //fetchOptions:{
                              //     mode:'no-cors',
                              //     },
                              //     headers:{
                              //               accept: 'application/json',
                              //               'content-type': 'application/json'
                              // }
                              //});
// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   operation.setContext({
//     headers: {
//       // 'accept': 'application/json',
//       // 'Content-Type': 'application/json',
//       // 'Access-Control-Allow-Origin': '*',
//       // 'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, HEAD'
//     }});
//   return forward(operation);
// })