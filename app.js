var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var pdf = require('express-html-to-pdf')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let coba = '';
// console.log(coba)
// let test = 10
// console.log(test)
// console.log(test === test)
var app = express();
app.use(pdf.default)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
