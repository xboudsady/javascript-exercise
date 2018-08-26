# Challenge

Write a function called "`computeAverageOfNumbers`".

Given an array of numbers, "`computeAverageOfNumbers`" returns their average. 

Notes:* If given an empty array, it should return 0.

```javascript
var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3
```

# Solution

```javascript
function computeAverageOfNumbers(nums) {
  if (nums.length === 0) {
    return 0;
  }
  
  var sum = 0
  
  for (var i = 0; i < nums.length; i++) {
    sum+= nums[i]
  }
  return sum / nums.length;
  
}

var input = [1, 2, 3, 4, 5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3
```