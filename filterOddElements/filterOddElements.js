function filterOddElements(arr) {
    const oddOnly = [];                         // Create our variable to be returned
    
    for (let i = 0; i < arr.length; i++) {      // Loop through our array
      if (arr[i] % 2 !== 0) {                   // Find the odd values
        oddOnly.push(arr[i]);                   // If True, push to our oddOnly variable
      }
    }
    return oddOnly;                             // Return our variable
  }
  
  var output = filterOddElements([1, 2, 3, 4, 5]);
  
  console.log(output); // --> [1, 3, 5]