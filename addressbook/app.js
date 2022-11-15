var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var config = require('./config');

var indexRouter = require('./routes/index');

//newly added
var personsRouter = require('./routes/persons');

var usersRouter = require('./routes/users');
const { config } = require('process');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//newly added
app.use('/persons', personsRouter);

app.use('/users', usersRouter);

app.listen(config.port, ()=>{
 console.log(`Server started on prt ${config.port}`);
});

module.exports = app;
