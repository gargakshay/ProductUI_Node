/**This method inserts the DCS node to the trees */

function insertDCNode(dcTreeMap) {
    try {
        var intregatedTree = [];
        var dcList = Object.keys(dcTreeMap);
        /**Running the loop for each matrixes*/
        var counter = 1;
        for (let j = 0; j < dcTreeMap.length; j++) {
            for (let key in dcTreeMap[j]) {
                var dcName = key;
                console.log("Running for DC - " + dcName);
                var treeDC = dcTreeMap[j][dcName];

                for (var i = 0; i < treeDC.length; i++) {
                    var matrixNode = treeDC[i];
                    var matrixName = matrixNode["text"];
                    var groups = matrixNode["children"];

                    /**Here we are getting the tree matrix node*/
                    var intigratedMatrixNode = {};
                    if (hasNode(intregatedTree, matrixName)) {
                        intigratedMatrixNode = getNode(intregatedTree, matrixName)
                    } else {
                        intigratedMatrixNode = matrixNode;
                        intigratedMatrixNode["children"] = [];
                        intregatedTree.push(intigratedMatrixNode);
                    }

                    /**Running the loop for each group */
                    for (let l = 0; l < groups.length; l++) {
                        var groupNode = groups[l];
                        var groupName = groupNode["text"];
                        var dcNode = { "text": dcName, "children": [], "state": { "opened": false, "disabled": false, "selected": false }, "type": "DC", "nodeType": 11, "groupID": groupNode["groupID"] };
                        var intigratedGroup = {};
                        if (hasNode(intigratedMatrixNode["children"], groupName)) {
                            intigratedGroup = getNode(intigratedMatrixNode["children"], groupName);
                            dcNode["children"] = groupNode["children"];
                            intigratedGroup["children"].push(dcNode);
                        } else {
                            intigratedGroup = groupNode;
                            dcNode["children"] = groupNode["children"];
                            intigratedGroup["children"] = [];
                            intigratedGroup["children"].push(dcNode);
                            intigratedMatrixNode["children"].push(intigratedGroup);
                        }
                    }
                }
            }
        }
        return intregatedTree;
    } catch (err) {
        console.log("Error: ", err);
    }
};

/**Get the node from the array */
function getNode(arr, nodeName) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == undefined)
            continue;

        if (arr[i]["text"] == nodeName)
            return arr[i];
    }
};

/**Checking in the node is present in the array or not */
function hasNode(arr, nodeName) {
    if (arr == undefined || arr == null || arr.length == 0)
        return false;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == undefined)
            continue;

        if (arr[i]["text"] == nodeName) {
            return true;
        }
    }
    return false;
};

exports.insertDCNode = insertDCNode;