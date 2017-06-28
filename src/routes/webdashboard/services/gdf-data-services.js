var express = require('express');
var async = require('async');

var URL = require('../../../constants/dashboard-data-url');
var log = require('../../../commons/logger/logger');

var router = express.Router();
var _filename = "gdf-data-service";

/** Getting derived group names*/
router.get(URL.DASHBOARD_DERIVED_GROUPNAMES, getData);

/** Derived Vector Names */
router.get(URL.DASHBOARD_DERIVED_VECTORNAMES, getData);

/** Pattern data */
router.get(URL.DASHBOARD_PATTERN_DATA, getData);

/** Vector Data */
router.get(URL.DASHBOARD_PATTERN_VECTOR_DATA, getData);

/** Derived Graph Names */
router.get(URL.DASHBOARD_DERIVED_GRAPHNAMES, getData);

/** Derived Generate Data */
router.get(URL.DASHBOARD_DERIVED_GENERATE_DATA, getData);

/** Custom open all members */
router.get(URL.DASHBOARD_CUSTOM_OPEN_ALL_MEMBERS, getData);

/** Custom open derived members */
router.get(URL.DASHBOARD_CUSTOM_OPEN_DERIVED_MEMBERS, getData);

/** Custom merge derived members */
router.get(URL.DASHBOARD_CUSTOM_MERGE_DERIVED_MEMBERS, getData);

/** Remove node from custom tree */
router.get(URL.DASHBOARD_REMOVE_NODE_FROM_CUSTOM_TREE, getData);

/** Using for get directly data from NDE node */
function getData(req, res, next) {
    res.send(req.data);
}

module.exports = router;