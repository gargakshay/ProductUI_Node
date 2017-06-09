var express = require('express');
var async = require('async');

var URL = require('../../constants/product-ui-url');
var restCall = require('../../commons/rest-api/rest-call');
var dcinfo = require('../../../conf/dcinfo');

var router = express.Router();

router.use((req, res, next) => {
    var dcname = req.query.dc;
    var path = req.url;
    var loaders;

    // In case of requested DC is ALL then we need to merge all DC data.
    if (dcname && dcname.toUpperCase() === 'ALL') {

        // Creating callback for each DC's request to be feed by async.parallel
        loaders = dcinfo.map(function (dcobj) {
            let url = `${req.protocol}://${dcobj.ip}:${dcobj.port}${path}`;

            return function (callback) {
                restCall.getRequest(url, callback)
            }
        });
    }
    // For Individual DC request
    else {
        // Find DC Obj
        var dcobj = dcinfo.find((info) => {
            return info.dc === dcname;
        });

        let url = `${req.protocol}://${dcobj.ip}:${dcobj.port}${path}`;

        loaders = [function (callback) {
            restCall.getRequest(url, callback)
        }];
    }

    async.parallel(loaders, (err, results) => {
        req.data = results;
        next();
    });

});

/** Get Product Name */
router.get(URL.PRODUCT_NAME, getData);

/** Get Refresh Interval Name */
router.get(URL.REFRESH_INTERVAL_TIME, getRefreshIntervalTime);

/** Check authenticate */
router.get(URL.AUTHENTICATE, getData);

/** Get DC info to client */
router.get(URL.DCINFO, getDCInfo)


/** Using for get directly data from NDE node */
function getData(req, res, next) {
    // var url = req.url;
    // var data = restCall.getDataByGetReq(url, res);
    res.send(req.data);
}

function getPosition(string, subString, index) {
   return string.split(subString, index).join(subString).length;
}

function getRefreshIntervalTime(req, res, next) {
    console.log("req.data", req.data);
    res.send(req.data);
}

/** Send DC info to client */
function getDCInfo(req, res) {
    console.log("dcinfo", dcinfo);
    res.send(dcinfo);
}


module.exports = router;