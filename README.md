 <img src="https://www.logolynx.com/images/logolynx/56/56afea50b83164e3e272d4ebeccd94fb.png" width="100px">

# E_commerce con Node.js, Express y MongoDB

Esta es una aplicación web de comercio electrónico desarrollada principalmente con nodejs, express y MongoDB.

+ Administrador de productos
+ Cotizador
+ Método de pago con paypal 
+ API REST
+ Productos divididos por categorías

## Tecnologías utilizadas

+ [Node.js](https://nodejs.org/)
+ [MongoDB](https://www.mongodb.com/es)
+ [Express](https://expressjs.com/es/)
+ [Bootstrap](https://getbootstrap.com/)
+ [Pug templates](https://pugjs.org/api/getting-started.html)
+ [JQuery](https://jquery.com/)
+ Otros



## Requerimientos

Descargue e instale NodeJs.
+ [Node.js](https://nodejs.org/es/)

## Instalación

### Clon
Clona este repositorio a tu máquina local usando:

	$ git clone https://github.com/CarlosRH7/e_commerce_nodejs.git

### Configuración de base de datos

Para poder iniciar la aplicación web de forma correcta debes crear una base de datos y un usuario y agregar la configuración en el archivo app.js 

```javascript
// Config DB

var mongoose = require('mongoose');
var mongoDB = 'My url config';
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
```
    
## Arrancando

Verificar la instalación de Node.js y npm

    $ node -v
    $ npm -v

Iniciando 

    $ cd e_commerce_nodejs
    $ npm install
    $ npm start

## Capturas de pantalla

 <img src="https://ecommercepipa.herokuapp.com/images/Inicio.jpg" width="100%">