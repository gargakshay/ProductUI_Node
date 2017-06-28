var express = require('express');

var treeService = require('./tree-service');
var initWebdashboard = require('./init-webdashboard');
var favoriteService = require('./favorite-data-services');
var dashboardDataService = require('./dashboard-data-service-resource');
var transactionDataService = require('./transaction-data-services');
var commonService = require('./common-services');
var compareService = require('./dashboard-compare-service');
var gdfDataService = require('./gdf-data-services');

var router = express.Router();

router.use("/DashboardServer/web/", treeService);

router.use("/DashboardServer/web/", initWebdashboard);

router.use("/DashboardServer/web/", favoriteService);

router.use("/DashboardServer/web/", dashboardDataService);

router.use("/DashboardServer/web/", transactionDataService);

router.use("/DashboardServer/web/", commonService);

router.use("/DashboardServer/web/", compareService);

router.use("/DashboardServer/web/", gdfDataService);

module.exports = router;