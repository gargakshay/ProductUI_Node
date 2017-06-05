var winston = require('winston');
var logConf = require('./log_config.js');

//Creating Logs directory as it doesn't create by itself
var fs = require('fs');
var dir = './logs';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

// By default Logging is in this format
// {"level":"info","message":"Hello distributed log files!","timestamp":"2017-06-03T07:05:16.763Z"}
// to view in simple string format, add json: false

var logger = new (winston.Logger)(logConf.conf);

// Defining methods for each log level
function errorLog(msgInfo){
  logger.error(msgInfo);
}

function warningLog(filename, method, msgInfo){
  logger.warn(`${filename} : ${method} : ${msgInfo}`);
}

function infoLog(filename, method, msgInfo){
  logger.info(`${filename} : ${method} : ${msgInfo}`);
}

function debugLog(msgInfo){
  logger.debug(msgInfo);
}

function traceLog(msgInfo){
  logger.silly(msgInfo);
}

// Exporting 
module.exports = { 
  error: errorLog,
  warn: warningLog,
  info: infoLog,
  debug: debugLog,
  trace: traceLog
}
