
// http://10.10.50.11:8002/ProductUI/productSummary/SummaryWebService/getProductName
const SERVICE_URL = '/ProductUI/productSummary/SummaryWebService';

exports.SERVICE_URL = SERVICE_URL;
exports.DCINFO = `/dcinfo`;

// Requests needed at startup
exports.PRODUCT_NAME = `${SERVICE_URL}/getProductName`;
exports.REFRESH_INTERVAL_TIME = `${SERVICE_URL}/getRefreshIntervalTime`;
exports.AUTHENTICATE = `${SERVICE_URL}/authenticate`;

// For ProductUI Main Page Data
exports.TEST_RUN_DATA = `${SERVICE_URL}/getDataForTestRun`;
exports.LAYOUT_JSON = `${SERVICE_URL}/getLayoutJSON`;
exports.BUILD_JSON = `${SERVICE_URL}/getBuildJsonData`;
exports.CPU_UTILIZATION = `${SERVICE_URL}/getCPUUtilization`;
exports.HEAP_MEMORY = `${SERVICE_URL}/getHeapMemory`;
exports.DISK_USAGE = `${SERVICE_URL}/getDiskUsageDTO`;
exports.DISK_SPACE = `${SERVICE_URL}/getDiskSpaceData`;
