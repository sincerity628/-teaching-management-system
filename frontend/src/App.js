import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './tools/Router';


import 'rsuite/dist/styles/rsuite-default.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>sidebar</h1>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
