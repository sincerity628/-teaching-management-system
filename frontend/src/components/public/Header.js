import React from 'react';
import  { Navbar, Nav, Dropdown, Icon } from 'rsuite';

const Header = () => {
  return (
    <div className="my-header">
      <Navbar appearance="subtle" style={{ padding: 4.5 }}>
        <Navbar.Body>
        <Nav pullRight>
          <Dropdown
            title="username"
            icon={<Icon icon="fa" style={{ color: '#eb2f00' }} />}
          >
            <Dropdown.Item>个人信息</Dropdown.Item>
            <Dropdown.Item>设置</Dropdown.Item>
            <Dropdown.Item>退出登录</Dropdown.Item>
          </Dropdown>
        </Nav>
        </Navbar.Body>
      </Navbar>
    </div>
  );
};


export default Header;
