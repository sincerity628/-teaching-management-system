const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// get all classes
router.get('/:serchText', (req, res) => {
  const searchText = req.params.searchText;
  if(searchText) {
    // searchText: class name
    console.log(searchText);
    const query = `select * from class where name = ${searchText}`;
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

module.exports = router;
