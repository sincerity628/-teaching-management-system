import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UIContext } from '../../contexts/UIContext';
import api from '../../tools/api';

const Class = () => {
  const { setMessage } = useContext(UIContext);
  const [classes, setClasses] = useState([]);
  const [searchText, setSearchText] = useState('离散数学（1）');

  useEffect(() => {
    api
      .getAllClasses(searchText)
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
            decription: error.data.msg
          });
        }
      })

  }, [searchText, setMessage]);

  return (
    <div className="class">
      <h1>Class</h1>
    </div>
  );
};

export default Class;
