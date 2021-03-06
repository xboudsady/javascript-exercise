function getLargestElementAtProperty(obj, key) {
    if (!obj.hasOwnProperty(key)) {                 // Check if obj has key property
      return undefined;
    }
    
    if (!Array.isArray(obj[key])) {                 // Check of obj key property is an array
      return undefined;
    }
    
    if (obj[key].length === 0) {                    // Check if obj key property is not empty
      return undefined;
    }
    
    var largestElement = obj[key][0];               // Create variable to hold our first variable in the array elements 
    
    for (var element in obj[key]) {                 // Use the for...in loop for object
      if (largestElement < obj[key][element]) {     // Copre our setup variable value with the element in the iterating value
        largestElement = obj[key][element];         // If largestElement is smaller, we re-assign to our new element value
      }
    }
    
    return largestElement;                          // Return our largestElementVariable
  }
  
  var obj = {
    key: [1, 2, 4]
  };
  
  var output = getLargestElementAtProperty(obj, 'key');
  console.log(output); // -->