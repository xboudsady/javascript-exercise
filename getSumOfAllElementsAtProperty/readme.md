# Challenge
Write a function called "`getSumOfAllElementsAtProperty`".

Given an object and a key, "`getSumOfAllElementsAtProperty`" returns the sum of all the elements in the array located at the given key. 

Notes:
* If the array is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the key, it should return 0.

# Solution

```javascript
function getSumOfAllElementsAtProperty(obj, key) {
    // Check if there is property at tkey
    // Check if given key is not an array
    // Check if is property at key
    if (obj[key] === undefined || !(Array.isArray(obj[key])) || obj[key].length < 1) {
        return 0;
    }

    // Use .reduce() to pass a function to sum up value in array
    return obj[key].reduce((acc, cur) => acc + cur);

}


var obj = {
    key: [4, 1, 8]
};

var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
```