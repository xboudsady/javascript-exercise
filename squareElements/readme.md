# Challenge

Write a function called "`squareElements`".

Given a array of numbers, "`squareElements`" should return a new array where each element is the square of the element of the given array.

```javascript
var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
```

# Solution

```javascript
function squareElements(arr) {
    var squared = []                            // Create our variable to be returned       
    
    for (var i = 0; i < arr.length; i++) {      // Loop through our array
      squared.push(arr[i] * arr[i]);            // Push the squared indexed value to squared
    }

    return squared;                             // Return our modified variable
  }
  
  var output = squareElements([1, 2, 3]);
  console.log(output); // --> [1, 4, 9]
```