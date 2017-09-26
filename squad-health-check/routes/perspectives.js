var express = require('express');
var router = express.Router();
var Perspective = require('../models/Perspective')

/* GET perspectives listing. */
router.get('/', function(req, res, next) {
  Perspective.find(function(err, perspectives) { 
    if (err) return next(err);
    res.json(perspectives);
  })
});

module.exports = router;
