function getAverageOfElementsAtProperty(obj, key) {
    if (!obj.hasOwnProperty(key)) {                 // Check if object has property
        return 0;
    }
    if (obj[key].length === 0) {                    // Check if property length is empty
        return 0;
    }
    if (!Array.isArray(obj[key])) {                 // Check if key property is an array
        return 0;
    }

    var sum = 0;                                    // Store our sum

    for (var i = 0; i < obj[key].length; i++) {     // Loop through our array and add to the sum variable
        sum += obj[key][i];
    }

    return sum / obj[key].length;                   // Return our sum
}

var obj = {
    key: [1, 2, 3]
};

var output = getAverageOfElementsAtProperty(obj, 'key');

console.log(output); // --> 2