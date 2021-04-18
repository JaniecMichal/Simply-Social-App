import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from 'mainComponent/App';
import store from 'mainComponent/redux/store';
import { GlobalStyle } from 'assets/GlobalStyles/GlobalStyles';
import { theme } from 'assets/Theme/theme';

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
