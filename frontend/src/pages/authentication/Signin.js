import React from 'react';
import { Input, Grid, Row, Col, Button } from 'rsuite';
import "./signin.css";

const Signin = () => {
  return (
    <div className="signin">
      <Grid fluid>
        <Row className="login-row">
          <Col xs={14} style={{ padding: 0 }}>
            <div className="login-image"></div>
          </Col>
          <Col xs={10} style={{ padding: 0 }}>
          <h3 className="login-title">教学管理系统</h3>
            <div className="login-form">
              <form>
                <div className="login-input">
                  <Input
                    placeholder="学号/工号"
                    className="my-input"
                    type="text"
                  />
                </div>
                <div className="login-input">
                  <Input
                    placeholder="密码"
                    className="my-input"
                    type="password"
                  />
                </div>

                <Button block color="red">登录</Button>
              </form>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Signin;
