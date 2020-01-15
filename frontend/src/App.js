import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './tools/Router';
import Header from './components/public/Header';
import SideBar from './components/public/SideBar';


import 'rsuite/dist/styles/rsuite-default.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
