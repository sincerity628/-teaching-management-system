import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'rsuite';
import { UIContext } from '../../contexts/UIContext';
import api from '../../tools/api';

const ChooseClassStatus = () => {
  const { setMessage } = useContext(UIContext);
  const [classId, setClassId] = useState('2800R807');
  const [className, setClassName] = useState('社会学思维');
  const [dropOpen, setDropOpen] = useState(false);
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api
      .getAllClasses(null)
      .then(res => {
        if(res.status === 200) {
          setClasses(res.data);
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
  }, [setMessage]);

  return (
    <div className="my-container">
      <div className="my-bread mt-4">
        <Link to="/" className="my-bread-link">Home</Link>
        <span className="my-forward-slash">/</span>
        <span className="my-bread-text">Choose Class Status</span>
      </div>
      <div className="my-card mt-4">
        <h3 className="my-card-title">选课情况</h3>
        <div className="container">
          <Dropdown
            title={className}
            open={dropOpen}
            onClick={() => setDropOpen(!dropOpen)}
          >
            <div className="my-dropdown-menu">
            { classes.map((item, index) => (
              <Dropdown.Item
                key={index}
                className="my-dropdown-item"
                onClick={() => {
                  setClassName(item.name);
                  setClassId(item.classId);
                  setDropOpen(false);
                }}
              >{ item.name }</Dropdown.Item>
            )) }
            </div>
          </Dropdown>
          <div className="my-table-container">
            studentTable
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseClassStatus;
