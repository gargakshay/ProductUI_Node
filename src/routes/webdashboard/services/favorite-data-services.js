var express = require('express');
var async = require('async');

var URL = require('../../../constants/favorite-data-url');
var log = require('../../../commons/logger/logger');

var router = express.Router();
var _filename = "fav-dataService";

/** Fav Tree */
router.get(URL.FAV_TREE, getData);

/** Using for get directly data from NDE node */
function getData(req, res, next) {
    res.send(req.data);
}

module.exports = router;