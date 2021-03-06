var express = require('express');

var URL = require('../../../constants/dashboard-data-url');
var log = require('../../../commons/logger/logger');

var router = express.Router();
var _filename = "dashboard-data-service";

/** Get Dashboard Onload Data */
router.get(URL.DASHBOARD_ONLOAD_DATA, getData);

/** Update Dashboard Data Packets */
router.get(URL.DASHBOARD_UPDATE_DATA_PACKETS, getData);

/** Update Dashboard Data Packets */
router.get(URL.DASHBOARD_SHOW_GRAPH_DATA, getData);

/** Update Dashboard Data Packets */
router.get(URL.DASHBOARD_GET_PANEL_FOR_NEW_ADDED_WIDGET, getData);

/** Update Dashboard Data Packets */
router.get(URL.DASHBOARD_CONVERT_CHART_AND_GET_DATA, getData);

/** Update Dashboard Data Packets */
router.get(URL.DASHBOARD_CONVERT_CHART, getData);

/** Pause Resume test */
router.get(URL.DASHBOARD_PAUSE_RESUME_TEST, getData);

/** Delete Widget */
router.get(URL.DASHBOARD_DELETE_WIDGET, getData);

/** Configuration Settings */
router.get(URL.CONFIGURATIONS_SETTING, getData);

/** Update Config Settings */
router.get(URL.UPDATE_CONFIG_SETTINGS, getData);

/** Using for get directly data from NDE node */
function getData(req, res, next) {
      res.send(req.data);
}

module.exports = router;