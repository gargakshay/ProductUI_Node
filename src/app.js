/** Import core modules */
var  express = require('express');

/** Import logger */
var log = require('./commons/logger/logger');

/** Import constants */
var URL = require('./constants/common-url');

/**Import modules for routing data */
var productUI = require('./routes/product-ui/login');

var app = express();

var filename = 'app';

app.use(URL.ROOT, productUI);

/**
 *  The function is executed every time the app receives a request. 
 *  TODO: Need to check, it is calling in case of error.
 * */
app.use(function (req, res, next) {
  log.info(filename, 'All Request', req, url);
  next()
})

// error handler 
app.use(function(err, req, res, next){
    //TODO : More handling
    res.status(err.status || 500);
    console.log("req", req);
    res.send(`${req.host}${req.url} url is invalid.` ) ;
});

module.exports = app;

