# Challenge

Write a function called "keep".

Given an array and a keeper element, "keep" returns an array containing the items that match the given keeper element.

Notes:* If no elements match, "keep" should return an empty array.

```javascript
var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); // --> [2, 2]
```

# Solution

```javascript
function keep(array, keeper) {
  var newArr = [];
  
  for (var i = 0; i < array.length; i++) {
    if (array[i] === keeper) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

var output = keep([1, 2, 3, 2, 1], 2)

console.log(output); // --> [2, 2]
```