var express = require('express');
var router = express.Router();
const fs = require('fs');
const ejs = require('ejs');

/* GET home page. */
router.get('/', function(req, res, next) {
	var show_image = req.query.img;
  res.render('select', {
	  img:show_image
  });
});

module.exports = router;
