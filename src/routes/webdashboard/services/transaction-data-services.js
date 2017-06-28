var express = require('express');

var URL = require('../../../constants/dashboard-data-url');
var log = require('../../../commons/logger/logger');

var router = express.Router();
var _filename = "transaction-data-service";

/** TX Details Data */
router.get(URL.DASHBOARD_TX_DETAILS_DATA, getData);

/** TX Details Graph Data */
router.get(URL.DASHBOARD_TX_DETAILS_GRAPH_OPTION, getData);

/** TX Details Error Chart */
router.get(URL.DASHBOARD_TX_DETAILS_ERROR_CHART, getData);

/** NC Cmp Data */
router.get(URL.DASHBOARD_TX_DETAILS_NC_CMP_DATA, getData);

/** Check two MSR for same session */
router.get(URL.TX_DETAIL_CHK_TWO_MSR_FROM_SAME_SESSION, getData);

/** Compare mode data */
router.get(URL.TX_DETAIL_COMPARE_MODE_DATA, getData);

/** Using for get directly data from NDE node */
function getData(req, res, next) {
    res.send(req.data);
}

module.exports = router;