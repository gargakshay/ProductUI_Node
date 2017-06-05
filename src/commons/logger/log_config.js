var winston = require('winston');

var logConf = {
  transports: [
    new (winston.transports.File)({
      name: 'info-file',
      filename: './logs/filelog-info.log',
      maxsize: '2000',
      maxFiles: 2,
      json: false,
      timestamp: function () {
        return new Intl.DateTimeFormat("en-US").format(new Date()) + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "-" + new Date().getMilliseconds()
      },
      level: 'info'
    }),
    new (winston.transports.File)({
      name: 'error-file',
      filename: './logs/filelog-error.log',
      maxsize: '2000',
      maxFiles: 2,
      json: false,
      timestamp: function () {
        return new Intl.DateTimeFormat("en-US").format(new Date()) + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "-" + new Date().getMilliseconds()
      },
      level: 'error'
    }),
    new (winston.transports.File)({
      name: 'debug-file',
      filename: './logs/filelog-debug.log',
      maxsize: '2000',
      maxFiles: 2,
      json: false,
      timestamp: function () {
        return new Intl.DateTimeFormat("en-US").format(new Date()) + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "-" + new Date().getMilliseconds()
      },
      level: 'debug'
    }),
    new (winston.transports.File)({
      name: 'warn-file',
      filename: './logs/filelog-warn.log',
      maxsize: '2000',
      maxFiles: 2,
      json: false,
      timestamp: function () {
        return new Intl.DateTimeFormat("en-US").format(new Date()) + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "-" + new Date().getMilliseconds()
      },
      level: 'warn'
    }),
    new (winston.transports.File)({
      name: 'trace-file',
      filename: './logs/filelog-trace.log',
      maxsize: '2000',
      maxFiles: 2,
      json: false,
      timestamp: function () {
        return new Intl.DateTimeFormat("en-US").format(new Date()) + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "-" + new Date().getMilliseconds()
      },
      level: 'silly'
    })
  ],
  exceptionHandlers: [
      new winston.transports.File({
        timestamp: function () {
          return new Intl.DateTimeFormat("en-US").format(new Date()) + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "-" + new Date().getMilliseconds()
        },
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
