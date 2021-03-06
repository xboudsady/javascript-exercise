# Challenge

Write a function called "`filterEvenElements`".

Given an array of numbers, "`filterEvenElements`" returns an array containing only the even numbers of the given array.

```javascript
var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
```

# Solution

```javascript
function filterEvenElements(arr) {
    const evenOnly = [];                        // Create an empty array to be returned
    
    for (let i = 0; i < arr.length; i++) {      // Loop through our array
      if (arr[i] % 2 === 0) {                   // Test for even numbers
        evenOnly.push(arr[i]);                  // If even, push to our array
      }
    }
    
    return evenOnly;                            // Return our array
  }
  
  var output = filterEvenElements([2, 3, 4, 5, 6]);
  console.log(output); // --> [2, 4, 6]
```