# Challenge

Write a function called "`getProductOfAllElementsAtProperty`".

Given an object and a key, "`getProductOfAllElementsAtProperty`" returns the product of all the elements in the array located at the given key. 

Notes:
* If the array is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.

```javascript
var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
```


# Solution

```javascript
function getProductOfAllElementsAtProperty(obj, key) {
    // Check if there is a key
    // Check if key is an array
    // check if array is empty
    if (obj[key] === undefined || !(Array.isArray(obj[key])) || obj[key].length < 1) {
        return 0;
    }

    // Use the .reduce() on array to sum up value
    return obj[key].reduce((acc, cur) => acc * cur);
}

var obj = {
    key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
```