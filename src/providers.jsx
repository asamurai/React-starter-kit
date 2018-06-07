import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../assets/style/theme';

import Main from './containers/main';

import configureStore from './state/store';

const store = configureStore();

class Providers extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Main/>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Providers;

