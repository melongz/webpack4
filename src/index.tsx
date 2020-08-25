import React from 'react';
import ReactDom from 'react-dom';
import Home from './pages/Home';
import './style/index.css';

function App() {
  return (
    <Home/>
  );
}

ReactDom.render(<App/>, document.getElementById('root'));
