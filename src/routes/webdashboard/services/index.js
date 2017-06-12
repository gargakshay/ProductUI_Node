var express = require('express');

var treeService = require('./tree-service');

var router = express.Router();

router.use("/DashboardServer/web/", treeService);

module.exports = router;