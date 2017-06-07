var http = require('http');
var fs = require('fs');
var request = require('request');

var log = require('../logger/logger');
var URL = require('../../constants/common-url');

var _fileName = 'rest-call';

var getReqObj = function (path) {
    var url = `http://${URL.SERVER_IP}:${URL.SERVER_PORT}${path}`;
    console.log("URLL**", url);
    return {
        url: url,
        method: 'GET'
    }
}

var getDataByGetReq = function (path, res) {
    request(getReqObj(path)).pipe(res);
}

exports.getDataByGetReq = getDataByGetReq;
