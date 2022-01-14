var express = require('express');
var router = express.Router();
const base = require('../controllers/baseController.js')
/* GET users listing. */
router.get('/', base.getAll)
router.get('/pdf', base.printPDF)
  
module.exports = router;
