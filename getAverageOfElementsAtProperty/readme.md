# Challenge

Write a function called "`getAverageOfElementsAtProperty`".

Given an object and a key, "`getAverageOfElementsAtProperty`" returns the average of all the elements in the array located at the given key. 

Notes:
* If the array at the given key is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.

```javascript
var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
```

# Solution

```javascript
function getAverageOfElementsAtProperty(obj, key) {
  
  if (!obj.hasOwnProperty(key)) {
    return 0;
  }
  if (obj[key].length === 0) {
    return 0;
  }
  if (!Array.isArray(obj[key])) {
    return 0;
  }
  
  var sum = 0;
  
  for (var i = 0; i < obj[key].length; i++) {
    sum += obj[key][i];
  }
  
  return sum / obj[key].length;
}

var obj = {
  key: [1, 2, 3]
};

var output = getAverageOfElementsAtProperty(obj, 'key');

console.log(output); // --> 2
```