import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, Button } from 'rsuite';
import { UIContext } from '../../contexts/UIContext';
import { UserContext } from '../../contexts/UserContext';
import ClassTable from '../../components/table/ClassTable';
import api from '../../tools/api';
import './class.css';

const ChooseClass = () => {
  const { setMessage } = useContext(UIContext);
  const { user } = useContext(UserContext);
  const [classes, setClasses] = useState([]);
  const [classId, setClassId] = useState('');

  useEffect(() => {
    api
      .getLeftClasses(user.studentId)
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
  }, [user, setMessage]);

  const handleChange = (v, e) => {
    setClassId(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(!classId) {
      setMessage({
        isMessage: true,
        title: 'warning',
        description: '请填写要选的课程号码...'
      });
      return;
    }

    let data = {
      userId: user.studentId,
      classId
    };
    api
      .chooseClass(data)
      .then(res => {
        if(res.status === 200) {
          setClasses(res.data);
          setClassId('');
          setMessage({
            isMessage: true,
            title: 'success',
            description: '选课成功！'
          });
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
  };

  return (
    <div className="choose-class my-container">
      <div className="my-bread mt-4">
        <Link to="/" className="my-bread-link">Home</Link>
        <span className="my-forward-slash">/</span>
        <span className="my-bread-text">Choose Class</span>
      </div>
      <div className="my-card mt-4">
        <h3 className="my-card-title">可选课程（{ classes.length }）</h3>
        <div className="container pb-4">
          <Form layout="inline" className="class-input">
            <FormGroup className="mr-2" style={{ width: "50%" }}>
              <Input
                className="my-input"
                placeholder="请输入课程号"
                id="text"
                value={classId}
                onChange={handleChange}
                style={{ width: "100%" }}
                autocompelete="off"
              />
            </FormGroup>
            <Button onClick={handleSubmit} color="red">确定选课</Button>
          </Form>
          <ClassTable classes={classes} />
        </div>
      </div>
    </div>
  );
};

export default ChooseClass;
