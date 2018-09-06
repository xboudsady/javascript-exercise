# Challenge

Write a function called "`joinArrayOfArrays`".

Given an array of arrays, "`joinArrayOfArrays`" returns a single array containing the elements of the nested arrays.

```javascript
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']
```
You should be familiar with the "concat" method for this problem. 


# Solution

```javascript
function joinArrayOfArrays(arr) {
    var newArr = [].concat.apply([], arr);  // Use the .apply() method of the concat() method and pass in two parameters

    return newArr;
}

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']
```
