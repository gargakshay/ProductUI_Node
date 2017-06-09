/** Import core modules */
var express = require('express');

/** Import logger */
var log = require('./commons/logger/logger');

/** Import constants */
var URL = require('./constants/common-url');

/**Import modules for routing data */
var productUI = require('./routes/product-ui/login');

var restCall = require('./commons/rest-api/rest-call');

var filename = 'app';

var app = express();


/**
 *  The function is executed every time the app receives a request. 
 * */
app.use(function (req, res, next) {
  var url = req.url;
  log.info(filename, 'All Request', url);

  // Handling for data request when we need to some modification in data.
  if (url && url.startsWith('/node')) {
    next();
  }
  // It will directly get data from tomcat server and send response to client.
  else {
    restCall.getDataByGetReq(url, res);
  }
})


app.use(URL.ROOT, productUI);

// error handler 
app.use(function (err, req, res, next) {
  //TODO : More handling
  res.status(err.status || 500);
  // console.log("req", req);
  res.send(`${req.host}${req.url} url is invalid.`);
});

module.exports = app;

