var winston = require('winston');

var logConf = {
  transports: [
    new (winston.transports.File)({
      name: 'info-file',
      filename: './logs/filelog-info.log',
      maxsize: '10000',
      maxFiles: 2,
      json: false,
      level: 'info'
    }),
    new (winston.transports.File)({
      name: 'error-file',
      filename: './logs/filelog-error.log',
      maxsize: '10000',
      maxFiles: 2,
      json: false,
      level: 'error'
    }),
    new (winston.transports.File)({
      name: 'debug-file',
      filename: './logs/filelog-debug.log',
      maxsize: '10000',
      maxFiles: 2,
      json: false,
      level: 'debug'
    }),
    new (winston.transports.File)({
      name: 'warn-file',
      filename: './logs/filelog-warn.log',
      maxsize: '10000',
      maxFiles: 2,
      json: false,
      level: 'warn'
    }),
    new (winston.transports.File)({
      name: 'trace-file',
      filename: './logs/filelog-trace.log',
      maxsize: '10000',
      maxFiles: 2,
      json: false,
      level: 'silly'
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: './logs/exceptions.log',
      json: false,
      maxsize: '10000',
      maxFiles: 2,
    })
  ]
}

//Exporting 
module.exports = {
  conf: logConf
}
