import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles.css';
import { Provider } from './components/context.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
