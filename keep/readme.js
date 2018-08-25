function keep(array, keeper) {
    var newArr = [];                            // Create an array to be return

    for (var i = 0; i < array.length; i++) {    // Initiate our loop
        if (array[i] === keeper) {              // Looking for our match
            newArr.push(array[i]);              // If match, push to our newArr
        }
    }
    return newArr;                              // Return our new Array
}

var output = keep([1, 2, 3, 2, 1], 2)

console.log(output); // --> [2, 2]