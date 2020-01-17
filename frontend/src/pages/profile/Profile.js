import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="profile container">
      <div className="bread mt-2">
        <Link to="/" className="bread-link">Home</Link>
        <span className="forward-slash">/</span>
        <span className="bread-text">Profile</span>
      </div>

      <div className="card mt-2">
        <h3 className="card-title">Profile</h3>
        <div className="card-body">

          { user.role === 'student'? (
            <div className="list-item mb-2">
              <span className="list-title">学号：</span>
              <span className="list-text">{ user.studentId }</span>
            </div>
          ) : (
            <div className="list-item mb-2">
              <span className="list-title">工号：</span>
              <span className="list-text">{ user.workId }</span>
            </div>
          ) }

          <div className="list-item mb-2">
            <span className="list-title">姓名：</span>
            <span className="list-text">{ user.name }</span>
          </div>

          <div className="list-item mb-2">
            <span className="list-title">姓别：</span>
            <span className="list-text">{ user.sex }</span>
          </div>

          <div className="list-item mb-2">
            <span className="list-title">年龄：</span>
            <span className="list-text">{ user.age }</span>
          </div>

          <div className="list-item mb-2">
            <span className="list-title">所属院系：</span>
            <span className="list-text">{ user.department }</span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Profile;
