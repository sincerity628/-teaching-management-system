import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, Button } from 'rsuite';
import { UIContext } from '../../contexts/UIContext';
import api from '../../tools/api';
import './class.css';

const Class = () => {
  const { setMessage } = useContext(UIContext);
  const [classes, setClasses] = useState([]);
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState(null);

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
            description: error.data.msg
          });
          setClasses([]);
        }
      })

  }, [searchText, setMessage]);

  const handleChange = (v, e) => {
    if(!e.target.value) {
      setSearchText(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(!text) {
      setMessage({
        isMessage: true,
        title: 'warning',
        description: '请填写要查找的课程名称'
      });
      return;
    }
    setSearchText(text);
  };

  return (
    <div className="class my-container">
      <div className="my-bread mt-4">
        <Link to="/" className="my-bread-link">Home</Link>
        <span className="my-forward-slash">/</span>
        <span className="my-bread-text">Class</span>
      </div>
      <div className="my-card mt-4">
        <h3 className="my-card-title">课程查询（{ classes.length }）</h3>
        <div className="container pb-4">
          <Form layout="inline" className="class-input">
            <FormGroup className="mr-2" style={{ width: "50%" }}>
              <Input
                className="my-input"
                placeholder="请输入课程名称"
                id="text"
                value={text}
                onChange={handleChange}
                style={{ width: "100%" }}
                autocompelete="off"
              />
            </FormGroup>

            <Button onClick={handleSubmit} color="red">查找</Button>
          </Form>
          <div className="my-table-container">
            { classes.length? (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">课号</th>
                    <th scope="col">课程名称</th>
                    <th scope="col">任课教师</th>
                    <th scope="col">学分</th>
                    <th scope="col">所属学院</th>
                  </tr>
                </thead>
                <tbody>
                  { classes.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{ index + 1 }</th>
                      <td>{ item.classId }</td>
                      <td>{ item.name }</td>
                      <td>{ item.staff }</td>
                      <td>{ item.point }</td>
                      <td>{ item.department }</td>
                    </tr>
                  )) }
                </tbody>
              </table>
            ) : (
              <p>没有找到...</p>
            ) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
