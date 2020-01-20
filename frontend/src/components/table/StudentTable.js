import React from 'react';
import { Link } from 'react-router-dom';

const StudentTable = ({ students }) => {
  return (
    <div className="my-table-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">学号</th>
            <th scope="col">姓名</th>
            <th scope="col">性别</th>
            <th scope="col">年龄</th>
            <th scope="col">院系</th>
          </tr>
        </thead>
        <tbody>
          { students.length ? students.map((student, index) => (
            <tr key={index}>
              <th scope="row">{ index + 1 }</th>
              <td>
                <Link
                  className="my-link-style"
                  to={`/student-profile/${student.studentId}`}
                >
                  { student.studentId }
                </Link>
              </td>
              <td>{ student.name }</td>
              <td>{ student.sex }</td>
              <td>{ student.age }</td>
              <td>{ student.department }</td>
            </tr>
          )) : null }
        </tbody>
      </table>
    </div>
  );
};


export default StudentTable;
