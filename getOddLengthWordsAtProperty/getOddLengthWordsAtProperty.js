function getOddLengthWordsAtProperty(obj, key) {
    // Create our array to be returned
    var myArr = []

    // Check if object has key, else return empty array
    if (!obj.hasOwnProperty(key)) {
        return [];
    }

    // Check if key property is an array
    if (!Array.isArray(obj[key])) {
        return [];
    }

    // Start our loop
    for (var i = 0; i < obj[key].length; i++) {
        
        if ((obj[key][i].length % 2) !== 0) {
            // If odd, push to our array
            myArr.push(obj[key][i]);
        }
    }

    return myArr;

}

var obj = {
    key: ['It', 'has', 'some', 'words']
}

var output = getOddLengthWordsAtProperty(obj, 'key');

console.log(output); // --> ['has', 'words']