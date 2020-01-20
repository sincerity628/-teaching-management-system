import React from 'react';
import { Link } from 'react-router-dom';
import { Sidenav, Nav, Icon, Dropdown } from 'rsuite';
import './public.css';

const headerStyles = {
  textAlign: 'center',
  padding: 20,
  fontSize: 18,
  fontWeight: 'bold',
  color: '#454546'
};

const Sidebar = () => {
  return (
    <div>
      <Sidenav
        defaultOpenKeys={['3', '4', '5']}
        appearance="subtle"
      >
        <Sidenav.Header>
          <div style={headerStyles}>教学管理系统</div>
        </Sidenav.Header>

        <Sidenav.Body>
          <Nav>
            <Nav.Item
              eventKey="2"
              icon={<Icon icon="home" />}
              componentClass={Link}
              to="/"
            >
              首页
            </Nav.Item>

            <Dropdown eventKey="3" title="课程" icon={<Icon icon="book" />}>
              <Dropdown.Item componentClass={Link} to="/choose-class">选课</Dropdown.Item>
              <Dropdown.Item componentClass={Link} to="/my-class">我的课程</Dropdown.Item>
              <Dropdown.Item componentClass={Link} to="/class">课程查询</Dropdown.Item>
              <Dropdown.Item componentClass={Link} to="/choose-class-status">选课情况</Dropdown.Item>
            </Dropdown>

            <Dropdown eventKey="4" title="成绩" icon={<Icon icon="check-square" />}>
              <Dropdown.Item componentClass={Link} to="/score">成绩信息</Dropdown.Item>
              <Dropdown.Item componentClass={Link} to="/score-status">成绩管理</Dropdown.Item>
            </Dropdown>

            <Dropdown eventKey="5" title="列表" icon={<Icon icon="bars" />}>
              <Dropdown.Item componentClass={Link} to="/students">学生</Dropdown.Item>
              <Dropdown.Item componentClass={Link} to="/staffs">教职工</Dropdown.Item>
            </Dropdown>

          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidebar;
