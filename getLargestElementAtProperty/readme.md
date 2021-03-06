# Challenge

Write a function called "`getLargestElementAtProperty`".

Given an object and a key, "`getLargestElementAtProperty`" returns the largest element in the array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

```javascript
var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
```


# Solution

```javascript
function getLargestElementAtProperty(obj, key) {
    if (!obj.hasOwnProperty(key)) {                 // Check if obj has key property
      return undefined;
    }
    
    if (!Array.isArray(obj[key])) {                 // Check of obj key property is an array
      return undefined;
    }
    
    if (obj[key].length === 0) {                    // Check if obj key property is not empty
      return undefined;
    }
    
    var largestElement = obj[key][0];               // Create variable to hold our first variable in the array elements 
    
    for (var element in obj[key]) {                 // Use the for...in loop for object
      if (largestElement < obj[key][element]) {     // Copre our setup variable value with the element in the iterating value
        largestElement = obj[key][element];         // If largestElement is smaller, we re-assign to our new element value
      }
    }
    
    return largestElement;                          // Return our largestElementVariable
  }
  
  var obj = {
    key: [1, 2, 4]
  };
  
  var output = getLargestElementAtProperty(obj, 'key');
  console.log(output); // -->
```