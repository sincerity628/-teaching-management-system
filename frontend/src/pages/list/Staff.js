import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UIContext } from '../../contexts/UIContext';
import api from '../../tools/api';

const Staff = () => {
  const { setMessage } = useContext(UIContext);
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    api
      .getAllStaffs()
      .then(res => {
        if(res.status === 200) {
          setStaffs(res.data);
        }
      })
      .catch(error => {
        setMessage({
          isMessage: true,
          title: 'error',
          decription: '获取教师列表失败'
        });
      })
  }, [setMessage]);

  return (
    <div className="student my-container">
      <div className="my-bread mt-4">
        <Link to="/" className="my-bread-link">Home</Link>
        <span className="my-forward-slash">/</span>
        <span className="my-bread-text">Staffs</span>
      </div>
      <div className="my-card mt-4">
        <h3 className="my-card-title">所有教师（{ staffs.length }）</h3>
        <div className="container pb-4">
          <div className="my-table-container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">工号</th>
                  <th scope="col">姓名</th>
                  <th scope="col">性别</th>
                  <th scope="col">年龄</th>
                  <th scope="col">院系</th>
                </tr>
              </thead>
              <tbody>
                { staffs.length ? staffs.map((staff, index) => (
                  <tr key={index}>
                    <th scope="row">{ index + 1 }</th>
                    <td>
                      <Link
                        className="my-link-style"
                        to={`/staff-profile/${staff.workId}`}
                      >
                        { staff.workId }
                      </Link>
                    </td>
                    <td>{ staff.name }</td>
                    <td>{ staff.sex }</td>
                    <td>{ staff.age }</td>
                    <td>{ staff.department }</td>
                  </tr>
                )) : null }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
