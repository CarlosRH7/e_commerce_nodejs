var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/productos', { title: 'Administrador de productos' });
});



module.exports = router;
