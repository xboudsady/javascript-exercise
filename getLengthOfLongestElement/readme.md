# Challenge

Write a function called "`getLengthOfLongestElement`".

Given an array, "`getLengthOfLongestElement`" returns the length of the longest string in the given array.

Notes:
* It should return 0 if the array is empty.

```javascript
var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
```
# Solution

```javascript
function getLengthOfLongestElement(arr) {
  if (arr.length === 0) {                       // Check if array is empty
    return 0;                                   // Return if empty
  }
  
  var longestLength = 0;                        // Initiate a variable to hold our first value
  
  arr.forEach(word => {                         // Use forEach() to loop
    if (longestLength < word.length) {          // Test if inital value of 0 is greater than our array word length
      longestLength = word.length;              // If true, set that to our new longest length
    } else {
      longestLength = longestLength;            // Else, do nothing
    }
  })
  
  return longestLength;                         // Return our longest length
  
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
```