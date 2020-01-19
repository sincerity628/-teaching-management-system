import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Modal, Button } from 'rsuite';
import { UIContext } from '../../contexts/UIContext';
import { UserContext } from '../../contexts/UserContext';
import api from '../../tools/api';


const initModal = {
  isModal: false,
  name: '',
  id: ''
};

const MyClass = () => {
  const { setMessage } = useContext(UIContext);
  const { user } = useContext(UserContext);
  const [classes, setClasses] = useState([]);
  const [modal, setModal] = useState(initModal);

  useEffect(() => {
    let data = {
      id: user.studentId
    };

    api
      .getMyClasses(data)
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

  }, [setMessage, user]);

  const openModal = (id, name) => {
    setModal({
      isModal: true,
      name: name,
      id: id
    });
  };

  const handleCancelClass = () => {
    let data = {
      userId: user.studentId,
      classId: modal.id
    };

    api
      .cancelClass(data)
      .then(res => {
        if(res.status === 200) {
          setClasses(res.data);
          setModal({ ...modal, isModal: false });
          setMessage({
            isMessage: true,
            title: 'success',
            description: '删除成功'
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
          setModal({ ...modal, isModal: false });
        }
      })
  };

  return (
    <div className="my-class my-container">

      <div className="modal-container">
        <Modal
          backdrop="static"
          show={modal.isModal}
          size="xs"
        >
          <Modal.Body>确定要退选 { modal.name } 吗？</Modal.Body>
          <Modal.Footer>
            <Button
              color="red"
              onClick={handleCancelClass}
            >确认</Button>
            <Button
              appearance="subtle"
              onClick={() => setModal({...modal, isModal: false})}
            >取消</Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div className="my-bread mt-4">
        <Link to="/" className="my-bread-link">Home</Link>
        <span className="my-forward-slash">/</span>
        <span className="my-bread-text">My Class</span>
      </div>

      <div className="my-card mt-4">
        <h3 className="my-card-title">已选课程（{ classes.length }）</h3>
        <div className="container">
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
                    <th scope="col">操作</th>
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
                      <td>
                        <span
                          className="my-link-style"
                          onClick={() => openModal(item.classId, item.name)}
                        >
                          <Icon
                            icon="exclamation"
                            className="mr-2"
                            style={{ color: '#e82903' }}
                          />
                          退课
                        </span>
                      </td>
                    </tr>
                  )) }

                </tbody>
              </table>
            ) : (
              <p>还没有选课...</p>
            ) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
