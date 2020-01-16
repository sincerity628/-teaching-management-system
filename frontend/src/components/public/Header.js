import React from 'react';
import { Link } from 'react-router-dom';
import  { Navbar, Nav, Dropdown, Icon } from 'rsuite';
import './public.css';

const Header = () => {

  const handleLogout = () => {
    console.log('log out.');
  };

  return (
    <div className="my-header">
      <Navbar appearance="subtle" style={{ padding: 4.5 }}>
        <Navbar.Body>
        <Nav pullRight>
          <Dropdown
            title="username"
            icon={<Icon icon="fa" style={{ color: '#eb2f00' }} />}
          >
            <Dropdown.Item componentClass={Link} to="/profile">个人信息</Dropdown.Item>
            <Dropdown.Item componentClass={Link} to="/setting">设置</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>退出登录</Dropdown.Item>
          </Dropdown>
        </Nav>
        </Navbar.Body>
      </Navbar>
    </div>
  );
};


export default Header;
