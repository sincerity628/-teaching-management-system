import React, { useState, useEffect, useContext } from 'react';
import { Form, FormGroup, Input, Button } from 'rsuite';
import { UIContext } from '../../contexts/UIContext';
import ClassTable from '../../components/table/ClassTable';
import api from '../../tools/api';

const Home = () => {
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
        <span className="my-bread-text">Home</span>
      </div>
      <div className="my-card mt-4">
        <h3 className="my-card-title">所有课程（{ classes.length }）</h3>
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
          <ClassTable classes={classes} />
        </div>
      </div>
    </div>
  );
};

export default Home;
