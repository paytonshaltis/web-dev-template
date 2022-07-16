import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

// Select the root element from the DOM.
const container: HTMLDivElement = document.getElementById(
  'root'
) as HTMLDivElement;
const root = createRoot(container);

// Render the application element within the Redux provider element.
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
