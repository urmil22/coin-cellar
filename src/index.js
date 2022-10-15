import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './app/store';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Provider store={store}> 
       <App />
    </Provider>
  </Router>
  </React.StrictMode>
);

