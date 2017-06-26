"use strict";

var http = require('http');
var fs = require('fs');
var zlib = require('zlib');

var request = require('request');

var log = require('../logger/logger');
var conf = require('../../../conf/system');
var URL = require('../../constants/common-url');

var dcinfo = require('../../../conf/dcinfo');

var _fileName = 'rest-call';

/** Reqest Options */
var requestOptions = function(path){

    return{
        url: path,
        timeout: conf.timeout,
        headers: {
            'X-some-headers': 'Some headers',
            'Accept-Encoding': 'gzip, deflate'
        },
        encoding: null
    }
}

/** This method create object for Get Request */
var getReqObj = function (path) {
    var url = `http://${URL.SERVER_IP}:${URL.SERVER_PORT}${path}`;

    return {
        url: url,
        method: 'GET',
        timeout: conf.timeout
    };
};

/** Duplicate method create object for Get Request Direct from Tomcat*/
var nonAggregateGetReq = function (path) {

    return {
        url: path,
        method: 'GET',
        timeout: conf.timeout
    };
};

/** Duplicate method create object for POST Request Direct from Tomcat*/
var nonAggregatePostReq = function (path, body) {

    return {
        url: path,
        method: 'POST',
        body: body,
        timeout: conf.timeout,
        json: true
    };
};

var getDataByGetReq = function (path, res) {
    request(getReqObj(path)).pipe(res);
}

var nonAggregateGetDataReq = function (path, res) {
    request(nonAggregateGetReq(path)).pipe(res);
}

var nonAggregatePostDataReq = function (path, res, body) {
    request(nonAggregatePostReq(path, body)).pipe(res);
}

var getRequest = function (path, dcname, callback) {
    log.info(_fileName, "getRequest", `Path: ${path}`);

    let options = requestOptions(path);

    request(options, (err, response, body) => {
        if (err) {
            callback(err);
        }
        else {
            var json = decodeRequest(err, response, body, dcname);
            callback(null, json);
        }
    });
};

var getRequestForALL = function(path, dcname, callback, query) {
  log.info(_fileName, "getRequest", `Path: ${path}`);
    let options = requestOptions(path);

    request(options, (err, response, body) => {
        if (err) {
            callback(err);
        }
        else {
            var json = decodeRequestForALL(err, response, body, dcname, query);
            callback(null, json);
        }
    });
}

var postRequest = function (path, dcname, callback, body) {
    log.info(_fileName, "postRequest", `Path: ${path}`);

    let options = {
        url: path,
        method: 'POST',
        timeout: conf.timeout,
        body: body,
        json: true
    };

    request(options, (err, response, body) => {
        if (err) {
            callback(err);
        }
        else {
            var json = decodeRequest(err, response, body, dcname);
            callback(null, json);
        }
    });
}

var decodeRequest = function (err, response, body, dcname) {
    var json;
    try {
        if (!err && response.statusCode == 200) {
            // If response is gzip, unzip first
            var encoding = response.headers['content-encoding'];
            if (encoding && encoding.indexOf('gzip') >= 0) {
                // zlib.gunzip(body, function (err, dezipped) {
                //     var json_string = dezipped.toString('utf-8');
                //     json = JSON.parse(json_string);
                //     // Process the json..
                //     var obj = {};
                //     // Added DC Name with Data
                //     obj[dcname] = json;
                //     log.trace(_fileName, "getRequest : Uncompressed = ", obj);
                //     return json;
                // });

                //TODO
                var json_string = zlib.gunzipSync(body);
                json = JSON.parse(json_string);
                log.trace(_fileName, "getRequest : Uncompressed = ", obj);
                return json;
            } else {
                // Response is not gzipped
                json = body;
                var obj = {};
                // Added DC Name with Data
                obj[dcname] = json;
                log.trace(_fileName, "getRequest", JSON.stringify(obj));
                return json;
            }
        }
        else {
            log.error(_fileName, "getRequest", "response statusCode is " + response.statusCode);
        }
    }
    catch (e) {
        log.error(_fileName, "getRequest", e);
    }

    return json;
}

/** Decode Request for All */
var decodeRequestForALL = function(err, response, body, dcname, query) {
  var json;
    try {
        if (!err && response.statusCode == 200) {
            // If response is gzip, unzip first
            var encoding = response.headers['content-encoding'];
            if (encoding && encoding.indexOf('gzip') >= 0) {
                //TODO
                var json_string = zlib.gunzipSync(body);
                json = JSON.parse(json_string);
                // Process the json..
                var obj = {};
                // Added DC Name with Data
                obj[dcname] = json;
                log.trace(_fileName, "decodeRequestForALL : Uncompressed = ", obj);
                return obj;
            } else {
                // Response is not gzipped
                json = body;
                var obj = {};
                // Added DC Name with Data
                obj["dcname"] = dcname;
                obj["data"] = json;
                log.trace(_fileName, "decodeRequestForALL", JSON.stringify(obj));
                return obj;
            }
        }
        else {
            log.error(_fileName, "decodeRequestForALL", "response statusCode is " + response.statusCode);
        }
    }
    catch (e) {
        log.error(_fileName, "decodeRequestForALL", e);
    }

    return json;
}

var getDCHost = function (url) {
    let host = '';
    try {
        /** URL is in the form /tomcat/DCNAME/ProductUI */
        let dcname = url.split('/')[2];

        //Getting IP and Port for requested DC 
        var dcobj = dcinfo.find((info) => {
            return info.dc === dcname;
        });
        var path = url.split('/').splice(3).join('/');

        host = `http://${dcobj.ip}:${dcobj.port}/${path}`;

    } catch (e) {
        log.error(_fileName, "getDCHost", e);
    }
    return host;
}

var interceptURL = function(path, res) {

    request(getReqObj(path), (err, response, body) => {
        var json_obj = JSON.parse(body);
        json_obj['isMultiDCMode'] = 'true';
        res.send(JSON.stringify(json_obj));
    });
}

exports.getDataByGetReq = getDataByGetReq;

exports.getRequest = getRequest;

exports.getRequestForALL = getRequestForALL;

exports.postRequest = postRequest;

exports.getDCHost = getDCHost;

exports.nonAggregateGetDataReq = nonAggregateGetDataReq;

exports.nonAggregatePostDataReq = nonAggregatePostDataReq;

exports.interceptURL = interceptURL;

