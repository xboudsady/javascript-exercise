# Challenge

Write a function called "getEvenElementsAtProperty".

Given an object and a key, "getEvenElementsAtProperty" returns an array containing all the even elements of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no even elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the given key, it should return an empty array.

```javascript
var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
```

# Solution

```javascript
function getEvenElementsAtProperty(obj, key) {
  if (!obj.hasOwnProperty(key)) {
    return [];
  }
  
  if (!Array.isArray(obj[key])) {
    return [];
  }
  
  var myArr = [];
  
  for (var element in obj[key]) {
    if (obj[key][element] % 2 === 0) {
      myArr.push(obj[key][element]);
    }
  }
  
  return myArr;
  
}

var obj = {
  key: [1000, 11, 50, 17]
};

var output = getEvenElementsAtProperty(obj, 'key');

console.log(output); // --> [1000, 50]
```