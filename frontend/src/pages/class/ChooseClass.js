import React, { useState, useEffect, useContext } from 'react';
import { UIContext } from '../../contexts/UIContext';
import { UserContext } from '../../contexts/UserContext';
import api from '../../tools/api';


const ChooseClass = () => {
  const { setMessage } = useContext(UIContext);
  const { user } = useContext(UserContext);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    api
      .getLeftClasses(user.studentId)
      .then(res => {
        if(res.status === 200) {
          setClasses(res.data);
          console.log(res.data);
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
  }, [user]);
  return (
    <div className="choose-class">
      <h1>Coose Class</h1>
    </div>
  );
};

export default ChooseClass;
