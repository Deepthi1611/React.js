import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const anotherUser = 'react.js'
const ReactElement = React.createElement(
  'a', // tag name
  {href: 'https:/google.com', target: '_blank'}, // props
  'click me to visit google', //children
  anotherUser //evaluated expression
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // ReactElement
);

