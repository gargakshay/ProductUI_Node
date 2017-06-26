const SCENARIO_WEB_SERVICE_URL = '/ProductUI/productSummary/ScenarioWebService';
const SUMMARY_WEB_SERVICE = '/ProductUI/productSummary/SummaryWebService';

exports.SCENARIO_LIST = `${SUMMARY_WEB_SERVICE}/getScenarioList`;
exports.PROJ_SUBPROJ_LIST = `${SUMMARY_WEB_SERVICE}/getProjSubprojList`;
exports.PROJ_SUBPROJ_SCENARIO_LIST = `${SUMMARY_WEB_SERVICE}/getProjectSubProjectScenarioList`;
exports.SET_LOGGING_INFO = `${SCENARIO_WEB_SERVICE_URL}/setLoggingInfo`;
exports.GET_PROJ_SUBPROJ_PROFILE_LIST = `${SUMMARY_WEB_SERVICE}/getProjSubprojProfileList`;
exports.IS_SCEN_EXIST = `${SCENARIO_WEB_SERVICE_URL}/isScenNameExist`;
exports.DELETE_SCEN_OR_PROFILE = `${SUMMARY_WEB_SERVICE}/deleteScenOrProfile`;
exports.SAVE_SCENARIO_AS_PROFILE = `${SCENARIO_WEB_SERVICE_URL}/saveScenAsProfile`;
exports.VERSION_COMMIT = `${SCENARIO_WEB_SERVICE_URL}/getScenarioVersion`;
exports.VERSION_LOGS = `${SCENARIO_WEB_SERVICE_URL}/getScenarioVersionlogs`;
exports.OPEN_SCEN_FILE = `${SCENARIO_WEB_SERVICE_URL}/openScenFile`;
exports.COPY_SCENARIO = `${SUMMARY_WEB_SERVICE}/copyScenario`;
exports.GET_SCENARIO_PROFILE_LIST = `${SUMMARY_WEB_SERVICE}/getScenarioProfileList`;
exports.OPEN_SCEN_PROFILE = `${SUMMARY_WEB_SERVICE}/openScenProfile`;