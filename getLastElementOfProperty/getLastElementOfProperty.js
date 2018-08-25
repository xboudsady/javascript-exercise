function getLastElementOfProperty(obj, key) {
    // CHeck if there is no prooperty at obj key
    // Check if property at given key is an array
    // Check if array is empty
    if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || obj[key].length === 0) {
        return undefined;
    }

    // return last element of the array property
    return obj[key].pop();
}

var obj = {
    key: [1, 2, 5]
};

var output = getLastElementOfProperty(obj, 'key');

console.log(output); // --> 5