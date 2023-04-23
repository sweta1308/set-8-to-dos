import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { TodoContext, TodoProvider } from './context/TodoContext';

import './index.css';
import App from './App';

export {TodoContext}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TodoProvider>
        <App />
      </TodoProvider>
      
    </Router>
    
  </React.StrictMode>
);

