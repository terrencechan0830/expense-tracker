import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './style/GlobalStyle';
import { GlobalProvider } from './context/GlobalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
      <GlobalProvider>
        <App />
      </GlobalProvider>
  </React.StrictMode>
);