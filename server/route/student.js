const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// get all students
router.get('/', (req, res) => {
  const query = 'select * from student';
  connection.query(query, (error, results) => {
    if(error) {
      throw error;
      res.status(400).json(error);
    } else {
      results.forEach(result => delete result.password);
      res.json(results);
    }
  });
});

//get a student
router.get('/:id', (req, res) => {
  const query = `select * from student where studentId = '${req.params.id}'`;
  connection.query(query, (error, results) => {
    if(error) {
      throw error;
      return res.status(400).json({
        msg: '数据库连接失败'
      });
    } else {
      if(results.length) {
        delete results[0].password;
        return res.json(results[0]);
      } else {
        return res.status(400).json({
          msg: '用户数据加载失败'
        });
      }
    }
  })
});

module.exports = router;
