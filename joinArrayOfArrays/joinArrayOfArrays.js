function joinArrayOfArrays(arr) {
    var newArr = [].concat.apply([], arr);  // Use the .apply() method of the concat() method and pass in two parameters

    return newArr;
}

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']