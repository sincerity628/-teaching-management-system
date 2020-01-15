import React from 'react';
import { Sidenav, Nav, Icon, Dropdown } from 'rsuite';

const headerStyles = {
  textAlign: 'center',
  padding: 20,
  fontSize: 18,
  fontWeight: 'bold',
  color: '#454546'
};

const SideBar = () => {
  return (
    <div>
      <Sidenav
        defaultOpenKeys={['3', '4']}
        appearance="subtle"
      >
        <Sidenav.Header>
          <div style={headerStyles}>教学管理系统</div>
        </Sidenav.Header>

        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="2" icon={<Icon icon="home" />}>
              首页
            </Nav.Item>

            <Dropdown eventKey="3" title="课程" icon={<Icon icon="book" />}>
              <Dropdown.Item>课程查询</Dropdown.Item>
              <Dropdown.Item>选课</Dropdown.Item>
              <Dropdown.Item>退课</Dropdown.Item>
            </Dropdown>

            <Dropdown eventKey="4" title="成绩" icon={<Icon icon="check-square" />}>
              <Dropdown.Item>成绩信息</Dropdown.Item>
              <Dropdown.Item>成绩分布情况</Dropdown.Item>
            </Dropdown>

            <Nav.Item eventKey="5" icon={<Icon icon="bars" />}>
              学生列表
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SideBar;
