function getEvenLengthWordsAtProperty(obj, key) {
    if (!obj.hasOwnProperty(key)) {                     // Check if there is a key property
        return [];
    }
    if (!Array.isArray(obj[key])) {                     // Check if obj key is an array
        return [];
    }
    if (obj[key].length == 0) {                         // Check if obj key array is empty
        return [];
    }

    var newArr = []                                     // Create an array to be returned

    for (var element in obj[key]) {                     // Loop through our object keys properties
        if ((obj[key][element].length % 2) === 0) {     // If length matches push to our array
            newArr.push(obj[key][element]);
        }
    }

    return newArr;                                      // Return our array

}

var obj = {
    key: ['a', 'long', 'game']
};

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']