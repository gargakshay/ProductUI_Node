"use strict";

var http = require('http');
var fs = require('fs');
var zlib = require('zlib');

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
    };
};

var getDataByGetReq = function (path, res) {
    request(getReqObj(path)).pipe(res);
}

var getRequest = function (path, dcname, callback) {
    log.info(_fileName, "getRequest", `Path: ${path}`);

    let options = {
        url: path,
        timeout: conf.timeout,
        headers: {
            'X-some-headers': 'Some headers',
            'Accept-Encoding': 'gzip, deflate'
        },
        encoding: null
    };

    request(options, (err, response, body) => {
        if (err) {
            callback(err);
        }
        else {
            try {
                var json;
                if (!err && response.statusCode == 200) {
                    // If response is gzip, unzip first
                    var encoding = response.headers['content-encoding'];
                    if (encoding && encoding.indexOf('gzip') >= 0) {
                        zlib.gunzip(body, function (err, dezipped) {
                            var json_string = dezipped.toString('utf-8');
                            json = JSON.parse(json_string);
                            // Process the json..
                            var obj = {};
                            // Added DC Name with Data
                            obj[dcname] = json;
                            log.trace(_fileName, "getRequest : Uncompressed = ", obj);
                            callback(null, obj);
                        });
                    } else {
                        // Response is not gzipped
                        json = body;
                        var obj = {};
                        // Added DC Name with Data
                        obj[dcname] = json;
                        log.trace(_fileName, "getRequest", obj);
                        callback(null, json);
                    }
                }
                else
                {
                    log.error(_fileName, "getRequest", "response statusCode is " + response.statusCode);
                    callback(null);
                }
            }
            catch (e) {
                log.error(_fileName, "getRequest", e);
            }
        }
    });
};

exports.getDataByGetReq = getDataByGetReq;

exports.getRequest = getRequest;

