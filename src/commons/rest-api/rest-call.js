var http = require('http');

var log = require('../logger/logger');
var URL = require('../../constants/common-url');

var _fileName = 'rest-call';

var requestConfig = function (path) {
    return {
        host: URL.SERVER_IP,
        port: URL.SERVER_PORT,
        path: path
    };
};

exports.getDataByGetReq = function (path, res) {
    log.info(_fileName, "getDataByGetReq", `URL= ${path}`);

    http.get(requestConfig(path), function (response) {
        var body = '';
        response.on('data', function (d) {
            body += d;
        });

        response.on('end', function () {
            res.send(body);
        })
    });
}
