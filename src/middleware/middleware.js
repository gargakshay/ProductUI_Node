var express = require('express');
var async = require('async');
var restCall = require('../commons/rest-api/rest-call');

var router = express.Router();
var dcinfo = require('../../conf/dcinfo');

var _filename = "middleware";

router.use((req, res, next) => {

        /**
         * req.baseUrl -> /node/PKY/DashboardServer/web
         * req.subBaseUrl -> /DashboardServer/web
         */
        var dcname = req.baseUrl.split("/")[2];

        req.subBaseUrl = "/" + req.baseUrl.split("/").slice(3).join("/");

        try {
            // Get DCName from baseurl (/node/:dc)
            var dcname = req.baseUrl.split("/")[2];
            var path = req.url;//req.subBaseUrl + req.url;
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
                if(results.length > 1)
                  req.data = results;
                else 
                  req.data = results[0];
                next();
            });
        }
        catch (e) {
            log.error(_filename, "router.use", e);
            next();
        }
});

module.exports = router;