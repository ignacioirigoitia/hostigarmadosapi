var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Bienvenidos a la API de IG-ARMADOS");
});

module.exports = router;
