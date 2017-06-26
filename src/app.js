"use strict";

/** Import core modules */
var express = require('express');
var compression = require('compression');

/** Import logger */
var log = require('./commons/logger/logger');

/** Import constants */
var URL = require('./constants/common-url');

/**Import modules for routing data */
var productUI = require('./routes/product-ui/login');
var webdashboard = require('./routes/webdashboard/services/');
var scenario = require('./routes/scenario/');

var bodyParser = require('body-parser');

/** Middleware */
var middlewares = require("./middleware/middleware");

var restCall = require('./commons/rest-api/rest-call');

var filename = 'app';

var app = express();

// app.use(compression());

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())

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
  // For cases where aggreagation is not needed, in that case req is sent directly to requested DC.
  else if (url && url.startsWith('/tomcat')) {
    let host = restCall.getDCHost(url);

    //Checking Request Method
    if (req.method == 'POST')
      restCall.nonAggregatePostDataReq(host, res, req.body);
    else
      restCall.nonAggregateGetDataReq(host, res);
  }
  // It will directly get data from tomcat server and send response to client.
  else {

    if (url && url.endsWith('getProductName'))
      restCall.interceptURL(url, res);
    else
      restCall.getDataByGetReq(url, res);
  }
});

app.use(URL.ROOT, middlewares, (req, res, next) => {
  next();
});

app.use(URL.ROOT, productUI);
app.use(URL.ROOT, webdashboard);
app.use(URL.ROOT, scenario);

// error handler 
app.use(function (err, req, res, next) {
  //TODO : More handling
  res.status(err.status || 500);
  // console.log("req", req);
  res.send(`${req.hostname}${req.url} url is invalid.`);
});

module.exports = app;

