var express = require('express');

var treeService = require('./tree-service');
var initWebdashboard = require('./init-webdashboard');
var favoriteService = require('./favorite-data-services');
var dashboardDataService = require('./dashboard-data-service-resource');

var router = express.Router();

router.use("/DashboardServer/web/", treeService);

router.use("/DashboardServer/web/", initWebdashboard);

router.use("/DashboardServer/web/", favoriteService);

router.use("/DashboardServer/web/", dashboardDataService);

module.exports = router;