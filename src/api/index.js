import ApolloClient, { createNetworkInterface } from 'apollo-client';
import config from './../../config';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
         uri: config.global.api.uri
    })
});

export default client;
