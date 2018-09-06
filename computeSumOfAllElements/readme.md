# Challenge

Write a function called "`computeSumOfAllElements`".

Given an array of numbers, "`computeSumOfAllElements`" returns the sum of all the elements in the given array.

```javascript
var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
```

# Solution

```javascript
function computeSumOfAllElements(arr) {
    return arr.reduce((acc, cur) => acc + cur); // Use the reduce() method to pass in a function to sum all values in the array
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
```