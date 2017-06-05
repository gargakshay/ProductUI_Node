var express = require('express');

var URL = require('../../constants/product-ui-url');
var restCall = require('../../commons/rest-api/rest-call');

var router = express.Router();

/** Get Product Name */
router.get(URL.PRODUCT_NAME, getData);

/** Get Refresh Interval Name */
router.get(URL.REFRESH_INTERVAL_TIME, getData);

/** Check authenticate */
router.get(URL.AUTHENTICATE, getData);


/** Using for get directly data from NDE node */
function getData(req, res, next){
    var url = req.url;
    var data = restCall.getDataByGetReq(url, res);
}

module.exports = router;