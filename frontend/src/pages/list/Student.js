import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UIContext } from '../../contexts/UIContext';
import StudentTable from '../../components/table/StudentTable';
import api from '../../tools/api';

const Student = (props) => {
  localStorage.setItem('history', props.location.pathname);

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
          <StudentTable students={students} />
        </div>
      </div>
    </div>
  );
};

export default Student;
