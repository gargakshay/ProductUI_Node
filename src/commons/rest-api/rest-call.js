var http = require('http');
var fs = require('fs');
var request = require('request');

var log = require('../logger/logger');
var conf = require('../../../conf/system');
var URL = require('../../constants/common-url');


var _fileName = 'rest-call';

/** This method create object for Get Request */
var getReqObj = function (path) {
    var url = `http://${URL.SERVER_IP}:${URL.SERVER_PORT}${path}`;

    return {
        url: url,
        method: 'GET',
        timeout: conf.timeout
    }
}

var getDataByGetReq = function (path, res) {
    request(getReqObj(path)).pipe(res);
}

var getRequest = function (path, callback) {
    log.info(_fileName, "getRequest", `Path: ${path}`);
    console.log("conf.timeout", conf.timeout);
    request(path, { timeout: conf.timeout }, (err, response, body) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, body);
        }
    });
}

exports.getDataByGetReq = getDataByGetReq;

exports.getRequest = getRequest;

