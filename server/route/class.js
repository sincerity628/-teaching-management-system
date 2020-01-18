const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// get all classes
router.get('/:searchText', (req, res) => {
  const searchText = req.params.searchText;
  if(searchText !== 'null') {
    // searchText: class name
    const query = `select * from class where name = '${searchText}'`;
    connection.query(query, (error, results) => {
      if(error) {
        throw error;
        return res.status(400).json({
          msg: '连接数据库失败'
        });
      } else {
        if(results.length) {
          return res.json(results);
        } else {
          return res.status(400).json({
            msg: '没有这样的课程...'
          });
        }
      }
    });

  } else {
    // searchText: null
    const query = 'select * from class';
    connection.query(query, (error, results) => {
      if(error) {
        throw error;
        return res.status(400).json({
          msg: '连接数据库失败'
        });
      } else {
        res.json(results);
      }
    });
  }

});

// get my chosen classes
router.post('/', (req, res) => {
  const query = `
    select *
    from class
    where classId in (
      select classId
      from chooseClass
      where studentId = '${req.body.id}'
    )
  `;
  connection.query(query, (error, results) => {
    if(error) {
      throw error;
      return res.status(400).json({
        msg: '连接数据库失败'
      });
    } else {
      return res.json(results);
    }
  });

});

// delete one of my chosen classes
router.post('/cancel', (req, res) => {
  const query = `
    delete from chooseClass
    where studentId = '${req.body.userId}'
    and classId = '${req.body.classId}'
  `;

  connection.query(query, (error, results) => {
    if(error) {
      throw error;
      return res.status(400).json({
        mag: '数据库连接失败'
      });
    } else {
      const query1 = `
        select *
        from class
        where classId in (
          select classId
          from chooseClass
          where studentId = '${req.body.userId}'
        )
      `;
      connection.query(query1, (error, results) => {
        if(error) {
          throw error;
          return res.status(400).json({
            msg: '数据库连接失败'
          });
        } else {
          res.json(results);
        }
      });
    }
  });

});

module.exports = router;
