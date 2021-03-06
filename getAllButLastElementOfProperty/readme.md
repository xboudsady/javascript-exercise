# Challenge

Write a function called "`getAllButLastElementOfProperty`".

Given an object and a key, "`getAllButLastElementOfProperty`" returns an array containing all but the last element of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If the property at the given key is not an array, it return an empty array.
* If there is no property at the key, it should return an empty array. 

```javascript
var obj = {
  key: [1, 2, 3]
};
var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]
```

# Solution

```javascript
function getAllButLastElementOfProperty(obj, key) {
    if (!obj.hasOwnProperty(key)) {                     // Check for porperty in obj
      return [];
    }
    
    if (!Array.isArray(obj[key])) {                     // Check of value is an array
      return [];
    }
    
    if (obj[key].length === 0) {                        // Check if that array is a string
      return [];
    }
    
    var allButLast = []                                 // Create our array to be returned
    
    for (var i = 0; i < obj[key].length -1; i++) {      // Loop through our array excelt last element
      allButLast.push(obj[key][i]);                     // Push each iteration to or array
    }
    
    return allButLast;                                  // Return our array
  }
  
  var obj = {
    key: [1, 2, 3]
  };
  
  var output = getAllButLastElementOfProperty(obj, 'key');
  console.log(output); // --> [1, 2];
```