var express = require('express');
var async = require('async');

var URL = require('../../../constants/dashboard-data-url');
var log = require('../../../commons/logger/logger');

var router = express.Router();
var _filename = "dashboard-compare-service";

/** Dashbaord Standard Compare Default Data*/
router.get(URL.DASHBOARD_STANDARD_COMPARE_DEFAULT_DATA, getData);

/** Compare on Preset call */
router.get(URL.DASHBOARD_COMPARE_DATA_ON_PRESET_CALL, getData);

/** Compare on Phase Call */
router.get(URL.DASHBOARD_COMPARE_DATA_ON_PHASES_CALL, getData);

/** Fav on Compare */
router.post(URL.DASHBOARD_FAVORITE_DATA_ON_COMPARE_APPLY, getData);

/** Update data packets */
router.get(URL.DASHBOARD_COMPARE_UPDATE_DATA_PKTS, getData);

/** Compare Auto Preset Suggestions */
router.get(URL.DASHBOARD_COMPARE_AUTO_PRESET_SUGGESTION, getData);

/** Using for get directly data from NDE node */
function getData(req, res, next) {
    res.send(req.data);
}

module.exports = router;