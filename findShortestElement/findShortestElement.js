function findShortestElement(arr) {
    if (arr.length === 0) {                             // Check if our array is empty
      return '';
    }
    
    let shortestElement = arr[0];                       //  Assign our shortest element is initial value from the array
    
    for (let i = 1; i < arr.length; i++) {              // Initiate our loop at 1
      if (shortestElement.length > arr[i].length) {     // Compare the initial length to the current length interation
        shortestElement = arr[i];                       // If true, re-assign
      }
    }
    
    return shortestElement;                             // Return or variable with the new element
  }
  
  var output = findShortestElement(['a', 'two', 'three']);
  console.log(output); // --> 'a'