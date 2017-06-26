"use strict";

var express = require('express');
var async = require('async');

var URL = require('../../constants/product-ui-url');
var log = require('../../commons/logger/logger');
var dcinfo = require('../../../conf/dcinfo');

var router = express.Router();
var _filename = "login";

/** Get Product Name */
router.get(URL.PRODUCT_NAME, getData);

/** Get Refresh Interval Name */
router.get(URL.REFRESH_INTERVAL_TIME, getData);

/** Check authenticate */
router.get(URL.AUTHENTICATE, getData);

/** Get DC info to client */
router.get(URL.DCINFO, getDCInfo)

/** Get Layout JSON */
router.get(URL.LAYOUT_JSON, getData);

/** Get Test Run Data */
router.get(URL.TEST_RUN_DATA, getData);

/** Get Build JSON */
router.get(URL.BUILD_JSON, getData);

/** Get CPU Utilization */
router.get(URL.CPU_UTILIZATION, getData);

/** Get Heap Memory */
router.get(URL.HEAP_MEMORY, getData);

/** Get Disk Usage */
router.get(URL.DISK_USAGE, getData);

/** Get Disk Space */
router.get(URL.DISK_SPACE, getData);

/**Get TR Data */
router.get(URL.TEST_RUN_DETAILS_JSON, getData);

/**Get Filter TR Data */
router.get(URL.FILTER_TEST_RUN_DETAILS, getData);


/** Using for get directly data from NDE node */
function getData(req, res, next) {
    res.send(req.data);
}

function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
}

/** Send DC info to client */
function getDCInfo(req, res) {    
    res.send(dcinfo);
}

process.on('uncaughtException', (err) => {
  console.log(err);
});

module.exports = router;