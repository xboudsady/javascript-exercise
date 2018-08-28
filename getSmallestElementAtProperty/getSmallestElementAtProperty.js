function getSmallestElementAtProperty(obj, key) {
    if (!obj.hasOwnProperty(key)) {
        return undefined;
    }

    if (!Array.isArray(obj[key])) {
        return undefined;
    }

    var smallestValue = obj[key][0];

    for (var i = 1; i < obj[key].length; i++) {
        if (smallestValue > obj[key][i]) {
            smallestValue = obj[key][i];
        }
    }

    return smallestValue;

}

var obj = {
    key: [2, 1, 5]
};

var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1