import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Routing
import AppRouting from './ejercicio-06/AppRouting';

// Redux
import { Provider } from 'react-redux';
import { createAppStore } from './ejercicio-08/store/config/storeConfig'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={createAppStore()}> 
    <React.StrictMode>
    <App />

    {/* Ejercicio 6 */}
    {/* <AppRouting /> */}
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
