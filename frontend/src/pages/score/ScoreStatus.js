import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'rsuite';
import { UIContext } from '../../contexts/UIContext';
import api from '../../tools/api';

const ChooseClassStatus = (props) => {
  localStorage.setItem('history', props.location.pathname);

  const { setMessage } = useContext(UIContext);
  const [classId, setClassId] = useState('2800R807');
  const [className, setClassName] = useState('社会学思维');
  const [dropOpen, setDropOpen] = useState(false);
  const [classes, setClasses] = useState([]);
  const [scores, setScores] = useState([]);

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

  useEffect(() => {
    api
      .getClassScore(classId)
      .then(res => {
        if(res.status === 200) {
          setScores(res.data);
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

  }, [classId, setMessage]);

  return (
    <div className="my-container">
      <div className="my-bread mt-4">
        <Link to="/" className="my-bread-link">Home</Link>
        <span className="my-forward-slash">/</span>
        <span className="my-bread-text">Choose Class Status</span>
      </div>
      <div className="my-card mt-4">
        <h3 className="my-card-title">成绩情况（{ scores.length }）</h3>
        <div className="container">
          <span>选择要查看的课程：</span>
          <Dropdown
            title={className}
            open={dropOpen}
            onClick={() => setDropOpen(!dropOpen)}
            className="mb-1"
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

          <div className="mt-3">
            { scores.length? (
              <div className="my-table-container">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">学号</th>
                      <th scope="col">姓名</th>
                      <th scope="col">院系</th>
                      <th scope="col">成绩</th>
                    </tr>
                  </thead>
                  <tbody>
                    { scores.map((score, index) => (
                      <tr key={index}>
                        <th scope="row">{ index + 1 }</th>
                        <td>
                          <Link
                            className="my-link-style"
                            to={`/student-profile/${score.studentId}`}
                          >
                            { score.studentId }
                          </Link>
                        </td>
                        <td>{ score.name }</td>
                        <td>{ score.department }</td>
                        <td>{ score.score }</td>
                      </tr>
                    )) }
                  </tbody>
                </table>
              </div>
            ) : (
              <p style={{ height: '400px' }}>还没有人完成这门课...</p>
            ) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseClassStatus;
