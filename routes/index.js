var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res,) {
  res.pdf(`
      <div>Hello world</div>
   `);
});

router.get('/test', function(req, res,) {
  res.pdf(`
      <div>Hello world</div>
   `);
});

module.exports = router;
