var express = require('express');
var async = require('async');

var URL = require('../../../constants/dashboard-data-url');
var log = require('../../../commons/logger/logger');

var router = express.Router();
var _filename = "fav-dataService";

/** Fav Tree */
router.get(URL.FAV_TREE, getData);

/** Load Fav Data */
router.get(URL.DASHBOARD_LOADING_FAVORITE_DATA, getData);

/** Check Available Fav */
router.get(URL.DASHBOARD_CHECK_FAVO_AVAIL, getData);

/** Save Fav*/
router.get(URL.DASHBOARD_SAVE_FAVORITE, getData);

/** Update Fav */
router.get(URL.DASHBOARD_UPDATE_FAVORITE, getData);

/** Update Mgmt Fav*/
router.get(URL.DASHBOARD_FAVORITE_MGMT_TREE_DATA, getData);

/** Mgmt Fav Opeartions*/
router.get(URL.DASHBOARD_FAVORITE_MGMT_TREE_OPERATIONS, getData);

/** Fav Mgmt set Default*/
router.get(URL.DASHBOARD_FAVORITE_MGMT_SET_DEFAULT, getData);

/** Using for get directly data from NDE node */
function getData(req, res, next) {
    res.send(req.data);
}

module.exports = router;