function getProductOfAllElementsAtProperty(obj, key) {
    // Check if there is a key
    // Check if key is an array
    // check if array is empty
    if (obj[key] === undefined || !(Array.isArray(obj[key])) || obj[key].length < 1) {
        return 0;
    }

    // Use the .reduce() on array to sum up value
    return obj[key].reduce((acc, cur) => acc * cur);
}

var obj = {
    key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24