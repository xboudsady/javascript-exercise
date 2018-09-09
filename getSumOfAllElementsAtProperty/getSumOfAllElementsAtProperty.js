function getSumOfAllElementsAtProperty(obj, key) {
    // Check if there is property at tkey
    // Check if given key is not an array
    // Check if is property at key
    if (obj[key] === undefined || !(Array.isArray(obj[key])) || obj[key].length < 1) {
        return 0;
    }

    // Use .reduce() to pass a function to sum up value in array
    return obj[key].reduce((acc, cur) => acc + cur);

}


var obj = {
    key: [4, 1, 8]
};

var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13