var linebot = require('linebot');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



// setup for linebot
var bot = linebot({
  channelId: '1608464162',
  channelSecret: '0892ebf2b065e59e00545dacf616d0ac',
  channelAccessToken: 'eI59B9rz4Hov7e2AcfzIxRPprE+JeBWR95eGN9KzEhDOfo9I3KOM+7DErclefGn866g9/JfDVwAEInR/OW2LEchWtqMIyQgo7/RKmK5zh6Z4N1hYUR7WXFNJzlAKdJYZ3/+Epnz3W0JIdiZA65zGEAdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

// linebotParser
var app = express();
const linebotParser = bot.parser();
app.post('/linebot', linebotParser);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
