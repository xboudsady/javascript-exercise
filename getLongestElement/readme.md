# Challenge

Write a function called "`getLongestElement`".

Given an array, "`getLongestElement`" returns the longest string in the given array.

Notes:
* If there are ties, it returns the first element to appear.
* If the array is empty, it should return an empty string.

```javascript
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
```

# Solution

```javascript
function getLongestElement(arr) {
    if (arr.length === 0) {                             // Check if array is empty
      return '';
    }
    
    let longestElement = arr[0];                        // Set inital value to be compared
    
    for (let i = 1; i < arr.length; i++) {              // Initiate loop at 1
      if (longestElement.length < arr[i].length) {      // Compare the two values
        longestElement = arr[i];                        // If initial is less than current, re-assign
      }
    }
    
    return longestElement;                              // Return variable
  }
  
  var output = getLongestElement(['one', 'two', 'three']);
  console.log(output); // --> 'three'
```