import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import  { Navbar, Nav, Dropdown, Icon } from 'rsuite';
import { UIContext } from '../../contexts/UIContext';
import { UserContext } from '../../contexts/UserContext';
import './public.css';

const Header = () => {
  const { setMessage } = useContext(UIContext);
  const { logout } = useContext(UserContext);

  const handleLogout = () => {
    setMessage({
      isMessage: true,
      title: 'success',
      description: '登出成功'
    });
    setTimeout(() => logout(), 2000);
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
