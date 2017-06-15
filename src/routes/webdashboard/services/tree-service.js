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

/** Tree Operations */
router.get(URL.DASHBOARD_STANDARD_TREE_OPERATIONS, getData);

/** Update Custom Tree Data */
router.get(URL.DASHBOARD_UPDATE_CUSTOM_TREE_DATA, getData);

/** Custom Tree Data */
router.get(URL.CUSTOM_TREE, getData);

/** Custom Merge with selected Panel Tree */
router.get(URL.DASHBOARD_CUSTOM_MERGE_WITH_SELECTED_PANEL, getData);

/** Open Merge Window Tree */
router.get(URL.DASHBOARD_OPEN_MERGE_WINDOW_defaultFilter, getData);

/** Dropping Graph on Panel */
router.get(URL.DASHBOARD_STANDARD_TREE_DROP_NODE, getData);

/** Using for get directly data from NDE node */
function getData(req, res, next) {
    req.data = aggregator.insertDCNode(req.data);
    res.send(req.data);
}

module.exports = router;