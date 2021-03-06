function getLengthOfShortestElement(arr) {
    if (arr.length === 0) {                     // Check if array is empty
      return 0;
    }
    
    let smallest = arr[0].length;               // Create variable to store inital value to compare
    
    for (let i = 1; i < arr.length; i++) {      // Initiate our loop at i = 1, since we assign i = 0 already
      if (smallest > arr[i].length) {           // Compare previous set length to current index
        smallest = arr[i].length;               // If smaller, then re-assign from current index
      }
    }
    return smallest;                            // Return smallest
    
  }
  
  var output = getLengthOfShortestElement(['one', 'two', 'three']);
  console.log(output); // --> 3 