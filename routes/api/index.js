var express = require('express');
var ProductoModel = require('../../models/Producto');
var router = express.Router();

router.get('/producto', function(req, res) {
  ProductoModel
    .find()
    .exec(function(err, producto) {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
      res.json(producto);
  }); 
});

router.post('/producto', function(req, res){
  console.log('query: ', req.query);
  console.log('body: ', req.body);

  var model = new ProductoModel();

  model.nombre = 'Tarjetas de Novios dos';
  model.tipo = 2;
  model.img = 'productoDos.png';
  model.descripcion = 'Esta es la descripción de mi producto'; 
  model.precio = 15.90;

  model.save(function(err) {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    res.sendStatus(201);
  });

});


module.exports = router;



