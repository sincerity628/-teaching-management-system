const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// signin
router.post('/', (req, res) => {

  const query1 = `select * from student where studentId = ${req.body.num}`;
  connection.query(query1, (error, results) => {
    if(error) {
      return res.status(400).json(error);
    } else {
      if(results.length) {
        let user = results[0];
        user.role = 'student';

        if(user.password !== req.body.password) {
          return res.status(400).json({
            msg: '密码错误'
          });
        }

        delete user.password;
        return res.json(user);
      } else {
        const query2 = `select * from staff where workId = ${req.body.num}`;
        connection.query(query2, (error, results) => {
          if(error) {
            return res.status(400).json(error);
          } else {
            if(results.length) {
              let user = results[0];
              user.role = 'staff';

              if(user.password !== req.body.password) {
                return res.status(400).json({
                  msg: '密码错误'
                });
              }

              delete user.password;
              return res.json(user);
            } else {
              // user not found
              return res.status(400).json({
                msg: '请检查学号或工号的正确性'
              });
            }
          }
        });

      }
    }
  });

});

module.exports = router;
