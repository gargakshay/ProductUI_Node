const DERIVED_DATA_SERVICE_URL = `/DerivedDataService`;
const GRAPH_TIME_SERVICE = `/graphTimeService`;

exports.DASHBOARD_DERIVED_GENERATE_DATA = `${DERIVED_DATA_SERVICE_URL}/generateDerivedGraph`;
exports.DASHBOARD_CUSTOM_OPEN_ALL_MEMBERS = `${DERIVED_DATA_SERVICE_URL}/openAllMemberForDerived`;
exports.DASHBOARD_CUSTOM_OPEN_DERIVED_MEMBERS = `${DERIVED_DATA_SERVICE_URL}/openMergeDerivedMembers`;
exports.DASHBOARD_CUSTOM_MERGE_DERIVED_MEMBERS = `${DERIVED_DATA_SERVICE_URL}/openMergeDerivedMembers`;
exports.DASHBOARD_REMOVE_NODE_FROM_CUSTOM_TREE = `${DERIVED_DATA_SERVICE_URL}/removeNode`;

/**Graph Time Service URL's */
exports.DASHBOARD_GRAPH_TIME_DATA = `${GRAPH_TIME_SERVICE}/graphData`;
exports.DASHBOARD_VIEWBY_DATA = `${GRAPH_TIME_SERVICE}/changeViewBy`;
