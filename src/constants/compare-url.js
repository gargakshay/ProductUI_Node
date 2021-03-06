const COMPARE_URL = `/compare`;
const STOP_TR_SERVICE = `/StopTestRunService`;
const START_STOP_MONITOR_SERVICE = `/StartStopMonitorService`;

exports.DASHBOARD_STANDARD_COMPARE_DEFAULT_DATA = `${COMPARE_URL}/defaultCompareWindowData`;
exports.DASHBOARD_COMPARE_DATA_ON_PRESET_CALL = `${COMPARE_URL}/comparePresetData`;
exports.DASHBOARD_COMPARE_DATA_ON_PHASES_CALL = `${COMPARE_URL}/getPhaselist`;
exports.DASHBOARD_FAVORITE_DATA_ON_COMPARE_APPLY = `${COMPARE_URL}/getCompareData`;
exports.DASHBOARD_COMPARE_UPDATE_DATA_PKTS = `${COMPARE_URL}/comparedDataPacket`;
exports.DASHBOARD_COMPARE_AUTO_PRESET_SUGGESTION = `${COMPARE_URL}/autoPresetSuggestion`;

/** Stop TR and Monitor Services */
exports.DASHBOARD_STOP_TESTRUN_NORMALLY = `${STOP_TR_SERVICE}/stopTestRunNormal`;
exports.DASHBOARD_START_TEST_IN_CONTMODE = `${STOP_TR_SERVICE}/startTestInContMode`;
exports.DASHBOARD_STOP_TEST_RUN = `${STOP_TR_SERVICE}/stopTestRun`;
exports.DASHBOARD_START_STOP_MONITOR_FROM_TREE = `${START_STOP_MONITOR_SERVICE}/getMonitorStatus`;