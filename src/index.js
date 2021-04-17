import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'mainComponent/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/GlobalStyles/GlobalStyles';
import { theme } from 'assets/Theme/theme';
import store from 'mainComponent/redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
