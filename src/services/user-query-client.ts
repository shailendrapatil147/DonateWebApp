//import {ApolloClient, createNetworkInterface} from'apollo-client';
//import {ApolloClient, HttpLink, InMemoryCache} from'apollo-boost';

// var createApolloClient = (options: any) => new ApolloClient(Object.assign({}, {
//   addTypename: true,
//   dataIdFromObject: (result: any) => {
//     if (result.id && result.__typename) { // eslint-disable-line no-underscore-dangle
//       return result.__typename + result.id; // eslint-disable-line no-underscore-dangle
//     }
//     return null;
//   }
//   // shouldBatch: true,
// }, options));

// const networkInterface = createNetworkInterface({
//   uri: 'https://localhost:44397/graphql',
//   opts: {
//       mode: 'no-cors',
//     },
// });

// export const apolloClient = createApolloClient({
//   networkInterface: networkInterface,
  
// });


// const httpLink = new HttpLink({ uri: 'https://localhost:44397/graphql'})

// export const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// })

