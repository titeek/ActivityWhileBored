import React from 'react';
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { store } from '../redux/store';
import { history } from '../redux/history';
import { themeDefault } from '../themes';

import Router from './Router';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={themeDefault}>
      <Router history={history} />
    </ThemeProvider>
  </Provider>
)

export default App;