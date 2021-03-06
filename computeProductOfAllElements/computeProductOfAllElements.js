function computeProductOfAllElements(arr) {
    if (arr.length === 0) {                                                         // Check for empty array     
      return 0
    }
    
    return arr.reduce((accumulator, currentvalue) => accumulator * currentvalue);  // Use the method .reduce() for array
  }
  
  var output = computeProductOfAllElements([2, 5, 6]);
  
  console.log(output); // --> 60