import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'rsuite';
import Router from './tools/Router';
import Header from './components/public/Header';
import SideBar from './components/public/SideBar';


import 'rsuite/dist/styles/rsuite-default.css';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Grid fluid>
          <Row>
            <Col
              xs={5}
              className="sidebar-col"
            >
              <div className="sidebar-container">
                <SideBar />
              </div>
            </Col>
            <Col xs={19} style={{ padding: 0 }}>
              <Header />
              <Router />
            </Col>
          </Row>
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;
