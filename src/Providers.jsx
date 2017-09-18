import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import Application from './Application.jsx';

import configureStore from './store';
import client from './api';

const store = configureStore();

class Providers extends Component {
    render () {
        return (
            <ApolloProvider store={store} client={client}>
                <BrowserRouter>
                    <Application/>
                </BrowserRouter>
            </ApolloProvider>
        );
    }
}

export default Providers;

