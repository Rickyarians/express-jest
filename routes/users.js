var express = require('express');
var router = express.Router();
const base = require('../controllers/baseController.js')
/* GET users listing. */
router.get('/', base.getAll)

module.exports = router;
