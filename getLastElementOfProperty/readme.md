# Challenge

Write a function called "getLastElementOfProperty".

Given an object and a key, "getLastElementOfProperty" returns the last element of an array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* if the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

```javascript
var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5
```
# Solution

```javascript
function getLastElementOfProperty(obj, key) {
  if (!obj.hasOwnProperty(key) || !Array.isArray(obj[key]) || obj[key].length === 0) {
    return undefined;
  }
  return obj[key].pop()
}

var obj = {
  key: [1, 2, 5]
};

var output = getLastElementOfProperty(obj, 'key');

console.log(output); // --> 5
```