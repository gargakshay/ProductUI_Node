var express = require('express');

var URL = require('../../../constants/tree-url');
var log = require('../../../commons/logger/logger');

var router = express.Router();
var _filename = "init-webdashboard";

/** Init Dashbaord */
router.get(URL.INIT_DASHBOARD, getData);

/** Get Tree */
router.get(URL.INIT_TREE, getData);

/** Dropping Graph on Panel */
router.get(URL.DASHBOARD_STANDARD_TREE_DROP_NODE, getData);

/** Using for get directly data from NDE node */
function getData(req, res, next) {
    res.send(req.data);
}

module.exports = router;