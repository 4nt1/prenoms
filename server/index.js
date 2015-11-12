import express          from 'express';
import path             from 'path';
import favicon          from 'serve-favicon';
import logger           from 'morgan';
import cookieParser     from 'cookie-parser';
import bodyParser       from 'body-parser';
import http             from 'http';

import routes           from './routes/index';
import names            from './routes/names';
import matches          from './routes/matches';
import mongoose         from 'mongoose';

var app = express();
app.server = http.createServer(app);

let port = process.env.NODE_ENV === 'production' ? 27017 : 17017;
mongoose.connect(`mongodb://localhost:${port}/prenoms`);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/names', names);
app.use('/matches', matches);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next){
      res.status(err.status || 500);
      res.send({
          message: err.message,
          error: err
      });
     return;
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.server.listen(process.env.PORT || 8080);

console.log(`Started on port ${app.server.address().port}`);

export default app;
