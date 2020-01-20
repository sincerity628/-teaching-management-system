const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// get my score
router.get('/:id', (req, res) => {
  const query = `
    select X.classId, score, name, staff, point, department
    from score X, class Y
    where X.classId = Y.classId
    and studentId = '${req.params.id}'
  `;
  connection.query(query, (error, results) => {
    if(error) {
      throw error;
      return res.status(400).json({
        msg: '数据库连接失败'
      });
    } else {
      let sum = 0;
      results.forEach(result => {
        sum += result.score;
      });
      let average = 0;
      if(results.length) {
        average = (sum / results.length).toFixed(2);
      }
      return res.json({ results, average });      
    }
  });
});




module.exports = router;
