function select(arr, obj) {
    // Create an empty objet
    var newObj = {}
    // Loop through the object
    for (var key in obj) {
        // Loopt through the array
        for (var i = 0; i < arr.length; i++) {
            // If array value match key
            if (arr[i] === key) {
                // Asseign new key, from the previous obj key
                newObj[key] = obj[key];
            }
        }
    }
    // Return our new object
    return newObj;
}

var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3}