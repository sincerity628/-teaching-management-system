const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// signin
router.post('/', (req, res) => {
  let found = false;
  const query1 = `select * from student where studentId = ${req.body.num}`;
  connection.query(query1, (error, results) => {
    if(error) {
      return res.status(400).json(error);
    } else {
      if(results.length) {
        let user = {
          studentId: results[0].studentId,
          name: results[0].name,
          sex: results[0].sex,
          age: results[0].age,
          department: results[0].department,
          role: 'student'
        };
        found = true;
        if(results[0].password !== req.body.password) {
          return res.status(400).json({
            msg: '密码错误'
          });
        }
        return res.json(user);
      }
    }
  });

  const query2 = `select * from staff where workId = ${req.body.num}`;
  connection.query(query2, (error, results) => {
    if(error) {
      return res.status(400).json(error);
    } else {
      if(results.length) {
        let user = {
          studentId: results[0].studentId,
          name: results[0].name,
          sex: results[0].sex,
          age: results[0].age,
          department: results[0].department,
          role: 'student'
        };
        found = true;
        if(results[0].password !== req.body.password) {
          return res.status(400).json({
            msg: '密码错误'
          });
        }
        return res.json(user);
      }
    }
  });

  if(!found) {
    return res.status(400).json({
      msg: '请检查学号或工号的正确性'
    });
  }

});


module.exports = router;
