import React from 'react';
import ReactDom from 'react-dom';
import Home from './pages/Home';
import './style/index.css';

console.log(GLOBAL_TEST);
console.log(process.env.NODE_ENV);

function App() {
  return (
    <Home/>
  );
}

ReactDom.render(<App/>, document.getElementById('root'));
