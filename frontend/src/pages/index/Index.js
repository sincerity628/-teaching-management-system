import React, { useContext } from 'react';
import { Grid, Row, Col, Notification } from 'rsuite';
import { UserContext } from '../../contexts/UserContext';
import AppRouter from '../../tools/AppRouter';
import Router from '../../tools/Router';
import Header from '../../components/public/Header';
import Sidebar from '../../components/public/Sidebar';

const Index = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="index">
      { user === null ? (
        <Router />
      ) : (
        <Grid fluid>
          <Row>
            <Col xs={4} className="sidebar-col">
              <div className="sidebar-container">
                <Sidebar />
              </div>
            </Col>
            <Col xs={20} style={{ padding: 0 }}>
              <Header />
              <AppRouter />
            </Col>
          </Row>
        </Grid>
      ) }
    </div>
  );
}

export default Index;
