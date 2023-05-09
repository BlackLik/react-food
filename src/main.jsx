// import React from 'react';
// import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import stores from './stores';
import { Provider } from 'react-redux';
import { render } from 'preact';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={stores}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
// );

render(
  <Provider store={stores}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
