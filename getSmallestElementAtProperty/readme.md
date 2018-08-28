# Challenge

Write a function called "`getSmallestElementAtProperty`".

Given an object and a key, "`getSmallestElementAtProperty`" returns the smallest element in the array located at the given key. 

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined. 
* If there is no property at the key, it should return undefined.

```javascript
var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
```

# Solution

```javascript
function getSmallestElementAtProperty(obj, key) {
  if (!obj.hasOwnProperty(key)) {                   // Check if there is a key property
    return undefined;
  }
  
  if (!Array.isArray(obj[key])) {                   // Check if key property is an array
    return undefined;
  }
  
  var smallestValue = obj[key][0];                  // Set our smallest value the first index of the array
  
  for (var i = 1; i < obj[key].length; i++) {       // Loop through our array, set the initial to 1, the second value of the array 
    if (smallestValue > obj[key][i]) {              // We compre the two, if index before it is greater, then we re-assign to the current index as our new smallest value
      smallestValue = obj[key][i];
    }
  }
  
  return smallestValue;                             // Return our smallest value
  
}

var obj = {
  key: [2, 1, 5]
};

var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
```