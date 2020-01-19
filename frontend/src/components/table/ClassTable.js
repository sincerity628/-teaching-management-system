import React from 'react';

const ClassTable = ({ classes }) => {
  return (
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
  );
};

export default ClassTable;
