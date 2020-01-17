import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UIContext } from '../../contexts/UIContext';
import api from '../../tools/api';

const initUser = {
  staffId: '1000',
  name: 'xxx',
  sex: 'x',
  age: '0',
  department: 'xxx',
  role: 'staff'
};

const StaffProfile = (props) => {
  const { setMessage } = useContext(UIContext);
  const [user, setUser] = useState(initUser);

  useEffect(() => {
    api
      .getStaff(props.match.params.id)
      .then(res => {
        if(res.status === 200) {
          setUser(res.data);
        }
      })
      .catch(error => {
        if(error.status === 400) {
          setMessage({
            isMessage: true,
            title: 'error',
            description: error.data.msg
          });
        }
      })
  }, [props, setMessage]);

  return (
    <div className="profile my-container">
      <div className="my-bread mt-4">
        <Link to="/" className="my-bread-link">Home</Link>
        <span className="my-forward-slash">/</span>
        <span className="my-bread-text">Profile</span>
      </div>

      <div className="my-card mt-4">
        <h3 className="my-card-title">个人信息</h3>
        <div className="my-card-body">

          { user.role === 'student'? (
            <div className="my-list-item mb-3">
              <span className="my-list-title">学号：</span>
              <span className="my-list-text">{ user.studentId }</span>
            </div>
          ) : (
            <div className="my-list-item mb-3">
              <span className="my-list-title">工号：</span>
              <span className="my-list-text">{ user.workId }</span>
            </div>
          ) }

          <div className="my-list-item mb-3">
            <span className="my-list-title">姓名：</span>
            <span className="my-list-text">{ user.name }</span>
          </div>

          <div className="my-list-item mb-3">
            <span className="my-list-title">姓别：</span>
            <span className="my-list-text">{ user.sex }</span>
          </div>

          <div className="my-list-item mb-3">
            <span className="my-list-title">年龄：</span>
            <span className="my-list-text">{ user.age }</span>
          </div>

          <div className="my-list-item mb-3">
            <span className="my-list-title">所属院系：</span>
            <span className="my-list-text">{ user.department }</span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default StaffProfile;
