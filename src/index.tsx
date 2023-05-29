import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
      <App />
  );
} else {
  console.error('Could not find root element.');
}