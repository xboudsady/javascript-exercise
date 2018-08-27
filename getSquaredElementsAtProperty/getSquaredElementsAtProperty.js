function getSquaredElementsAtProperty(obj, key) {
    if (!obj.hasOwnProperty(key)) {                     // Check if obj has key and property
        return [];
    }

    if (!Array.isArray(obj[key])) {                     // Check if key property is an array
        return [];
    }

    var myArr = []                                      // Create our Array to be returned

    for (var prop in obj[key]) {                        // Loop through our object key properties
        myArr.push(Math.pow(obj[key][prop], 2))         // push to our array, using Math.pow() method
    }
    return myArr;                                       // return our new array
}

var obj = {
    key: [2, 1, 5]
};

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output);