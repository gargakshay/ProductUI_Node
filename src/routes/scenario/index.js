"use strict";

var express = require('express');
var async = require('async');

var URL = require('../../constants/scenario-ui-url');
var log = require('../../commons/logger/logger');
var dcinfo = require('../../../conf/dcinfo');

var router = express.Router();
var _filename = "scenario";

/**Get Sceanrio Data */
router.get(URL.SCENARIO_LIST, getData);

/**Get Proj Sub Proj TR Data */
router.get(URL.PROJ_SUBPROJ_LIST, getData);

/**Get Proj Sub Proj Scenario Data */
router.get(URL.PROJ_SUBPROJ_SCENARIO_LIST, getData);

/**Set Sceanrio Logging Info */
router.get(URL.SET_LOGGING_INFO, getData);
 
/**Get project subproject profile list */
router.get(URL.GET_PROJ_SUBPROJ_PROFILE_LIST, getData); 

/** Is Scenario Exists */
router.get(URL.IS_SCEN_EXIST, getData);

/** Open Scen File */
router.get(URL.OPEN_SCEN_FILE, getData);

/** Open Scen File */
router.all(URL.COPY_SCENARIO, getData);

/** Delete Scen or Profile */
router.all(URL.DELETE_SCEN_OR_PROFILE, getData);

/** Save Scenario as Profile */
router.get(URL.SAVE_SCENARIO_AS_PROFILE, getData);

/** Version Commit */
router.get(URL.VERSION_COMMIT, getData);

/** Get Version Logs */
router.get(URL.VERSION_LOGS, getData);

/** Get Scen Profile List */
router.get(URL.GET_SCENARIO_PROFILE_LIST, getData);

/** OPen Scen Profile */
router.get(URL.OPEN_SCEN_PROFILE, getData);

/** Using for get directly data from NDE node */
function getData(req, res, next) {
    res.send(req.data);
}

process.on('uncaughtException', (err) => {
  console.log(err);
});

module.exports = router;