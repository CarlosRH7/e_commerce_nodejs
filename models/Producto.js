'use strict';
var mongoose    = require('mongoose');
var ProductoModel = function() {
	var productoSchema = new mongoose.Schema({
		'tipo': String,
		'nombre': String,
		'img': String,
        'descripcion': String,
        'precio':String,

	});
	productoSchema.index({name: 'text', tipo: 1});
	var producto = mongoose.model('Producto', productoSchema);

	return producto;
};

module.exports = new ProductoModel();