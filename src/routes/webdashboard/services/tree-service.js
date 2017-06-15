var express = require('express');
var async = require('async');

var URL = require('../../../constants/tree-url');
var log = require('../../../commons/logger/logger');
var restCall = require('../../../commons/rest-api/rest-call');
var dcinfo = require('../../../../conf/dcinfo');

var aggregator = require('../../../../cav_lib/dashboard/tree/tree-aggregator');

var router = express.Router();
var _filename = "tree-service";

/** Get Product Name */
router.get(URL.TREE_SEARCH, getData);

/** Get Custom Tree */
router.get(URL.CUSTOM_TREE, getData);

/** Using for get directly data from NDE node */
function getData(req, res, next) {
    req.data = aggregator.insertDCNode(req.data);
    res.send(req.data);
}

module.exports = router;