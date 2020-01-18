import React, { useState, useEffect, useContext } from 'react';
import { UIContext } from '../../contexts/UIContext';
import { UserContext } from '../../contexts/UserContext';
import api from '../../tools/api';

const MyClass = () => {
  const { setMessage } = useContext(UIContext);
  const { user } = useContext(UserContext);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    let data = {
      id: user.studentId
    };

    api
      .getMyClasses(data)
      .then(res => {
        if(res.status === 200) {
          setClasses(res.data);
          console.log(res.data);
        }
      })
      .catch(error => {
        console.log(error);
      })

  }, [setMessage]);

  return (
    <div className="my-class">
      <h1>My Class</h1>
    </div>
  );
};

export default MyClass;
