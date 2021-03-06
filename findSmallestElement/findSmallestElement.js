function findSmallestElement(arr) {
    if (arr.length === 0) {                     // Check for empty array
      return 0;
    }
    
    let smallestElement = arr[0];               // Create variable to store first array element to compre in our loop
    
    for (let i = 1; i < arr.length; i++) {      // Iniate the loop at 1, since we already assigned first element previously
      if (smallestElement > arr[i]) {           // Compare the two values
        smallestElement = arr[i];               // If the value is larger, then re-assign smallestElement to the current iterating value
      }
    }
    
    return smallestElement;                     // Return the smallestElement
  }
  
  var output = findSmallestElement([4, 1, 9, 10]);
  console.log(output); // --> 1