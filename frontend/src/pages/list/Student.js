import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UIContext } from '../../contexts/UIContext';
import api from '../../tools/api';

const Student = () => {
  const { setMessage } = useContext(UIContext);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api
      .getAllStudents()
      .then(res => {
        if(res.status === 200) {
          setStudents(res.data);
        }
      })
      .catch(error => {
        setMessage({
          isMessage: true,
          title: 'error',
          decription: '获取学生列表失败'
        });
      })
  }, [setMessage]);

  return (
    <div className="student my-container">
      <div className="my-bread mt-4">
        <Link to="/" className="my-bread-link">Home</Link>
        <span className="my-forward-slash">/</span>
        <span className="my-bread-text">Students</span>
      </div>
      <div className="my-card mt-4">
        <h3 className="my-card-title">所有学生（{ students.length }）</h3>
        <div className="container pb-4">
          <div className="my-table-container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">学号</th>
                  <th scope="col">姓名</th>
                  <th scope="col">性别</th>
                  <th scope="col">年龄</th>
                  <th scope="col">院系</th>
                </tr>
              </thead>
              <tbody>
                { students.length ? students.map((student, index) => (
                  <tr key={index}>
                    <th scope="row">{ index + 1 }</th>
                    <td>
                      <Link
                        className="my-link-style"
                        to={`/student-profile/${student.studentId}`}
                      >
                        { student.studentId }
                      </Link>
                    </td>
                    <td>{ student.name }</td>
                    <td>{ student.sex }</td>
                    <td>{ student.age }</td>
                    <td>{ student.department }</td>
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

export default Student;
