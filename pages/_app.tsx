import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import store from '../store';

import '../styles/reset.css';
import '../styles/themes/night/styles.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
