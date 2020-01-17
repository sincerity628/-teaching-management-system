import React, { useState, useContext } from 'react';
import { Input, Grid, Row, Col, Button } from 'rsuite';
import { UIContext } from '../../contexts/UIContext';
import { UserContext } from '../../contexts/UserContext';
import api from '../../tools/api';
import "./signin.css";

const initUser = {
  num: '',
  password: ''
};

const Signin = () => {
  const { setMessage } = useContext(UIContext);
  const { login } = useContext(UserContext);

  const [user, setUser] = useState(initUser);
  const [btnLoading, setBtnLoading] = useState(false);

  const handleChange = (v, e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(!user.num || !user.password) {
      setMessage({
        isMessage: true,
        title: 'warning',
        description: '还有信息没有填写完整噢'
      });
      return;
    }

    setBtnLoading(true);

    api
      .signin(user)
      .then(res => {
        if(res.status === 200) {
          let user = res.data;
          // success
          setMessage({
            isMessage: true,
            title: 'success',
            description: '登录成功'
          });
          setBtnLoading(false);

          setTimeout(() => {
            login(user);
          }, 2000);

        }
      })
      .catch(error => {
        // failed
        setBtnLoading(false);
        console.log(error);
        if(error.status === 400) {
          setMessage({
            isMessage: true,
            title: 'error',
            description: error.data.msg
          });
          setUser({
            ...user,
            password: ''
          });
        }
      })
  };

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
              <form onSubmit={handleSubmit}>
                <div className="login-input">
                  <Input
                    id="num"
                    value={user.num}
                    placeholder="学号/工号"
                    className="my-input"
                    type="text"
                    onChange={handleChange}
                  />
                </div>
                <div className="login-input">
                  <Input
                    id="password"
                    value={user.password}
                    placeholder="密码"
                    className="my-input"
                    type="password"
                    onChange={handleChange}
                  />
                </div>

                <Button
                  block
                  color="red"
                  onClick={handleSubmit}
                  disabled={btnLoading}
                >登录</Button>
              </form>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Signin;
