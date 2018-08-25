function getNthElementOfProperty(obj, key, n) {
  
    // Check if there is no property at the key
    // Check if the property at the given key is not an array
    // Check if n is out of range
    if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || obj[key].length === 0) {
        return undefined;
    }
  
    return obj[key][n];
}

var obj = {
    key: [1, 2, 6]
};

var output = getNthElementOfProperty(obj, 'key', 1);

console.log(output); // --> 2