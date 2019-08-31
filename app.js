var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var detalleRouter = require('./routes/detalle');
var AdminPorductosRouter = require('./routes/admin/productos');
var api = require('./routes/api/index');


// Config DB
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://ecommerce:ecommerce123@cluster0-ilicw.mongodb.net/ecommerce?retryWrites=true';
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/detalle', detalleRouter);
app.use('/api/', api);
app.use('/admin/productos', AdminPorductosRouter);


app.use(function(req, res){
  res.status(404);
  res.render('errors/404.pug', {detalle:'Upss.. '});
});

app.use(function(error, req, res, next){
  res.status(500);
  res.render('errors/500.pug', {detalle:'valio madr....'});
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;