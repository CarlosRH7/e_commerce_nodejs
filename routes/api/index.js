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
  // console.log('query: ', req.query);
  // console.log('body: ', req.body);

  var model = new ProductoModel();

  model.nombre = 'Producto Tres';
  model.tipo = 'invitacion-digital';
  model.img = '9.jpg';
  model.gallery = ['9.jpg', '9.jpg', '9.jpg', '9.jpg'];
  model.descripcion = 'Los recuerdos pueden incluir artículos caseros, como por ejemplo camisetas, ceniceros, reproducciones de edificios, libretas, postales, sombreros o tazas, entre muchos otros.'; 
  model.precio = 30;

  model.save(function(err) {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    res.sendStatus(201);
  });

});


module.exports = router;



