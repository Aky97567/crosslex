import React from 'react';
import ReactDOM from 'react-dom/client';
import { ClientContextProvider } from '@whitelotus/front-shared';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClientContextProvider>
      <App />
    </ClientContextProvider>
  </React.StrictMode>,
);
