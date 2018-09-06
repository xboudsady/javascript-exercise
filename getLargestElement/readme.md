# Challenge

Write a function called "`getLargestElement`".

Given an array, "`getLargestElement`" returns the largest number in the given array.

Notes:
* It should return 0 if the array is empty.

```javascript
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
```

# Solution

```javascript
function getLargestElement(arr) {
    if (arr.length === 0) {                         // Check if the array is empty
        return 0;
    }

    let largestElement = arr[0];                    // Assign initial value to first element in array

    for (let i = 1; i < arr.length; i++) {          // Initiate Loop at i = 1 because index[0] has been assigned previously
        if (largestElement < arr[i]) {              // Compare the two values
            largestElement = arr[i]                 // Reassign if initial value is smaller
        }
    }

    return largestElement;                          // return variable
}

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
```