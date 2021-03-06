import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootswatch/dist/lux/bootstrap.min.css";

import App from './App';
import { Provider } from 'react-redux';
import store from "./store"         //by default exports index.js file 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>          {/*here we have provided store as a prop  */}
    <App />

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
