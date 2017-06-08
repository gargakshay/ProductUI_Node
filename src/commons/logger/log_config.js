var winston = require('winston');

/**
 * Defining log levels
 * By default Log Levels are: { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 } (0 -5 ) high to low
 */
var log_levels = {
  error: 0,
  warn: 1,
  info: 2,
  verbose: 3,
  debug: 4,
  silly: 5
}

var logConf = {
  levels: log_levels,
  transports: [
    new (winston.transports.File)({
      name: 'info-file',
      filename: './logs/filelog-info.log',
      maxsize: '2000',
      levelOnly: false, // if true, will only log the specified level, if false will log from the specified level and above 
      maxFiles: 2,
      json: false,
      level: 'info'
    }),
    new (winston.transports.File)({
      name: 'error-file',
      filename: './logs/filelog-error.log',
      maxsize: '2000',
      levelOnly: false,
      maxFiles: 2,
      json: false,
      level: 'error'
    }),
    new (winston.transports.File)({
      name: 'debug-file',
      filename: './logs/filelog-debug.log',
      maxsize: '2000',
      levelOnly: false,
      maxFiles: 2,
      json: false,
      level: 'debug'
    }),
    new (winston.transports.File)({
      name: 'warn-file',
      filename: './logs/filelog-warn.log',
      maxsize: '2000',
      levelOnly: false,
      maxFiles: 2,
      json: false,
      level: 'warn'
    }),
    new (winston.transports.File)({
      name: 'trace-file',
      filename: './logs/filelog-trace.log',
      maxsize: '2000',
      levelOnly: false,
      maxFiles: 2,
      json: false,
      level: 'silly'
    })
  ],
  exceptionHandlers: [
      new winston.transports.File({
        filename: './logs/exceptions.log',
        json: false,
        maxsize: '2000',
        maxFiles: 2,
      })
  ]
}

//Exporting 
module.exports = {
  conf: logConf
}
