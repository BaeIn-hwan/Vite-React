import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { useLocation } from 'react-router-dom';

console.log(window.location);

ReactDOM.createRoot(document.getElementById('root')!).render(
  // React.StrictMode은 주석이 두 번 연속으로 나와서 주석
  // <React.StrictMode>
  // </React.StrictMode>,
  <App />,
);
