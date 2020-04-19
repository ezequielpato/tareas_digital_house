const express = require('express');
const router = express.Router();
const fs = require('fs');

const losHeroes = require('../data/heroes.json')

router.get('/', function (req, res, next) {
  res.send(losHeroes);
});

module.exports = router;