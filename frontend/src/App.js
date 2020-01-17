import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UIContextProvider from './contexts/UIContext';
import UserContextProvider from './contexts/UserContext';
import Index from './pages/index/Index';


import 'rsuite/dist/styles/rsuite-default.css';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <UIContextProvider>
          <UserContextProvider>
            <Index />
          </UserContextProvider>
        </UIContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
