import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'rsuite';
import AppRouter from './tools/AppRouter';
import Router from './tools/Router';
import Header from './components/public/Header';
import Sidebar from './components/public/Sidebar';


import 'rsuite/dist/styles/rsuite-default.css';

function App() {

  return (
    <div className="app">
      <BrowserRouter>

        <Router />

        <Grid fluid>
          <Row>
            <Col xs={5} className="sidebar-col">
              <div className="sidebar-container">
                <Sidebar />
              </div>
            </Col>
            <Col xs={19} style={{ padding: 0 }}>
              <Header />
              <AppRouter />
            </Col>
          </Row>
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;
