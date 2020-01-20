import React, { useState, useEffect, useContext } from 'react';
import { UIContext } from '../../contexts/UIContext';
import { UserContext } from '../../contexts/UserContext';
import api from '../../tools/api';

const Score = () => {
  const { setMessage } = useContext(UIContext);
  const { user } = useContext(UserContext);
  const [scores, setScores] = useState([]);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    api
      .getMyScore(user.studentId)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })

  }, [setMessage]);

  return (
    <div className="score">
      <h1>Score</h1>
    </div>
  );
};

export default Score;
