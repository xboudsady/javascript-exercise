# Challenge

Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

```javascript
var output = sumDigits(1148);
console.log(output); // --> 14
```

If the number is negative, the first digit should count as negative.

```javascript
var output = sumDigits(-316);
console.log(output); // --> 4
```

Notes:
* In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
* Be sure to familiarize yourself with the "toString" method, as well as the "Number" function. 


# Solution

```javascript
function sumDigits(num) {
    let numString = num.toString();                         // Convert number to a string
    let starting = 0;                                       // Create a variable for our starting value
    let sum = 0                                             // Create a variable to store our sum to be returned
    
                                        // Handling negative first element
    if (num < 0) {                      // Check for negative values
      sum -= Number(numString[1]);      // If it's negative, we decrement the sum by the number index of 1 // sum = 0 - (2) = -2
      starting += 2;                    // Then increment the starting by 2 // starting = 0 + 2 = 2
    }

                                                            // Initiate loop to sum up value
    for (let i = starting; i < numString.length; i++) {     // Starting loop is the second element (since we check for negative values above)
      sum += Number(numString[i]);                          // Take the sum value, and increment by each value in the number string
    }
    
    return sum;                                             // Returning the sum
  }
  
  var output = sumDigits(1148);
  console.log(output); // --> 14
  
  var output = sumDigits(-316);
  console.log(output); // --> 4
```