import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'rsuite';
import { UIContext } from '../../contexts/UIContext';
import api from '../../tools/api';

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
          console.log(res);
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

  }, [searchText, setMessage]);

  const handleChange = (v, e) => {
    setText(e.target.value);
  };

  return (
    <div className="class my-container">
      <div className="my-bread mt-4">
        <Link to="/" className="my-bread-link">Home</Link>
        <span className="my-forward-slash">/</span>
        <span className="my-bread-text">Class</span>
      </div>
      <div className="my-card mt-4">
        <h3 className="my-card-title">课程查询</h3>
        <div className="container pb-4">
          <form className="my-3">
            <Input
              className="my-input"
              placeholder="请输入课程名称"
              id="text"
              value={text}
              onChange={handleChange}
            />
          </form>
          <div className="my-table-container">
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
                { classes.length? classes.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{ index + 1 }</th>
                    <td>{ item.classId }</td>
                    <td>{ item.name }</td>
                    <td>{ item.staff }</td>
                    <td>{ item.point }</td>
                    <td>{ item.department }</td>
                  </tr>
                )) : null }
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
