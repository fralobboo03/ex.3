var express = require('express');
var router = express.Router();
var contact = require ('../config/database');

router.get('/', function(req, res, next) {
  var query = "SELECT * FROM positions";
  contact.query(query, function(error,result){
    res.json(result)
  
  })
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'หน้าแรก' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'เกี่ยวกับฉัน' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'ติดต่อยังไงครับคุณแจ็คครับ' });
});




module.exports = router;
