var express = require('express');
var async = require('async');

var URL = require('../../../constants/dashboard-common-url');
var log = require('../../../commons/logger/logger');

var router = express.Router();
var _filename = "common-service";

/** Dashbaord Layout Data*/
router.get(URL.DASHBOARD_LAYOUT_DATA, getData);

/** Data Download */
router.get(URL.DASHBOARD_DATA_DOWNLOAD, getData);

/** Update Create Layout */
router.get(URL.DASHBOARD_UPDATE_CREATE_LAYOUT, getData);

/** save layout data */
router.get(URL.DASHBOARD_SAVE_LAYOUT_DATA, getData);

/** Change graph Color from Lower Panel */
router.get(URL.DASHBOARD_CHANGE_GRAPH_COLOR_FROM_LOWER_PANEL, getData);

/** Show/Hide Graph */
router.get(URL.DASHBOARD_SHOW_HIDE_GRAPH, getData);

/** Highlight Graph */
router.get(URL.DASHBOARD_HIGHLIGHT_GRAPH, getData);

/** Download Lower Panel */
router.get(URL.DASHBOARD_DOWNLOAD_LOWER_PANEL, getData);

/** TR Output */
router.get(URL.DASHBOARD_TEST_RUN_OUTPUT, getData);

/** Drill Down Menu */
router.get(URL.DASHBOARD_DRILL_DOWN_MENU, getData);

/** Drill Down URL */
router.get(URL.DASHBOARD_DRILL_DOWN_URL_Option, getData);

/** Color Change Data */
router.get(URL.DASHBOARD_COLOR_CHANGE_DATA, getData);

/** Dashboard Color Mgmt */
router.get(URL.DASHBOARD_COLOR_MANAGEMENT, getData);

/** Using for get directly data from NDE node */
function getData(req, res, next) {
    res.send(req.data);
}

module.exports = router;