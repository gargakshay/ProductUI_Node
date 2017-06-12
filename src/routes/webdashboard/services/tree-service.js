var express = require('express');
var async = require('async');

var URL = require('../../../constants/tree-url');
var log = require('../../../commons/logger/logger');
var restCall = require('../../../commons/rest-api/rest-call');
var dcinfo = require('../../../../conf/dcinfo');

var aggregator = require('../../../../cav_lib/dashboard/tree/tree-aggregator');

var router = express.Router();
var _filename = "tree-service";

router.use((req, res, next) => {
    /**
     * req.baseUrl -> /node/PKY/DashboardServer/web
     * req.subBaseUrl -> /DashboardServer/web
     */
    req.subBaseUrl = "/" + req.baseUrl.split("/").slice(3).join("/");
    try {
        // Get DCName from baseurl (/node/:dc)
        var dcname = req.baseUrl.split("/")[2];
        var path = req.subBaseUrl + req.url;
        var loaders;

        // In case of requested DC is ALL then we need to merge all DC data.
        if (dcname && dcname.toUpperCase() === 'ALL') {

            // Creating callback for each DC's request to be feed by async.parallel
            loaders = dcinfo.map(function (dcobj) {
                let url = `${req.protocol}://${dcobj.ip}:${dcobj.port}${path}`;

                return function (callback) {
                    restCall.getRequest(url, dcobj.dc, callback);
                };
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
                restCall.getRequest(url, dcname, callback)
            }];
        }

        async.parallel(loaders, (err, results) => {
            // Set respond data in req. object
            req.data = results;
            next();
        });
    }
    catch (e) {
        log.error(_filename, "router.use", e);
        next();
    }
});

/** Get Product Name */
router.get(URL.TREE_SEARCH, getData);

/** Using for get directly data from NDE node */
function getData(req, res, next) {
    req.data = aggregator.insertDCNode(req.data);
    res.send(req.data);
}


module.exports = router;