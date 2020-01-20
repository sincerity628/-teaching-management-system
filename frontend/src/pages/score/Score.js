import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UIContext } from '../../contexts/UIContext';
import { UserContext } from '../../contexts/UserContext';
import api from '../../tools/api';
import './score.css';

const Score = () => {
  const { setMessage } = useContext(UIContext);
  const { user } = useContext(UserContext);
  const [scores, setScores] = useState([]);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    api
      .getMyScore(user.studentId)
      .then(res => {
        if(res.status === 200) {
          setScores(res.data.results);
          setAverage(res.data.average);
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

  }, [user, setMessage]);

  return (
    <div className="score my-container">
      <div className="my-bread mt-4">
        <Link to="/" className="my-bread-link">Home</Link>
        <span className="my-forward-slash">/</span>
        <span className="my-bread-text">My Score</span>
      </div>
      <div className="my-card mt-4">
        <h3 className="my-card-title">成绩单（{scores.length}）</h3>
        <div className="container pb-4">
          <div className="my-table-container">
            { scores.length? (
              <div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">课号</th>
                      <th scope="col">课程名称</th>
                      <th scope="col">任课教师</th>
                      <th scope="col">学分</th>
                      <th scope="col">所属学院</th>
                      <th scope="col">成绩</th>
                    </tr>
                  </thead>
                  <tbody>
                    { scores.map((score, index) => (
                      <tr key={index}>
                        <th scope="row">{ index }</th>
                        <td>{ score.classId }</td>
                        <td>{ score.name }</td>
                        <td>{ score.staff }</td>
                        <td>{ score.point }</td>
                        <td>{ score.department }</td>
                        <td>{ score.score }</td>
                      </tr>
                    )) }
                  </tbody>
                </table>
                <p className="average-point">我的平均成绩：{ average }</p>
              </div>
            ) : (
              <p>还没有完成的课程...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
