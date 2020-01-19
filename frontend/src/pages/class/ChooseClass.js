import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, Button } from 'rsuite';
import { UIContext } from '../../contexts/UIContext';
import { UserContext } from '../../contexts/UserContext';
import ClassTable from '../../components/table/ClassTable';
import api from '../../tools/api';


const ChooseClass = () => {
  const { setMessage } = useContext(UIContext);
  const { user } = useContext(UserContext);
  const [classes, setClasses] = useState([]);
  const [searchText, setSearchText] = useState(null);
  const [text, setText] = useState('');

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

  const handleChange = (v, e) => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="choose-class my-container">
      <div className="my-bread mt-4">
        <Link to="/" className="my-bread-link">Home</Link>
        <span className="my-forward-slash">/</span>
        <span className="my-bread-text">Choose Class</span>
      </div>
      <div className="my-card mt-4">
        <h3 className="my-card-title">选课（{ classes.length }）</h3>
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
          { classes.length? (
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
                    <th scope="col">选课</th>
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
                      <td>check box</td>
                    </tr>
                  )) }
                </tbody>
              </table>
            </div>
          ) : (
            <p>没有可以选择的课了...</p>
          ) }
        </div>
      </div>


    </div>
  );
};

export default ChooseClass;
