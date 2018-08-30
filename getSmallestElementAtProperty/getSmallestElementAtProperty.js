function getSmallestElementAtProperty(obj, key) {
    if (!obj.hasOwnProperty(key)) {                   // Test if object has key
      return undefined;
    }
    
    if (!Array.isArray(obj[key])) {                   // Check if key property is an array
      return undefined;
    }
    
    var smallestValue = obj[key][0];                  // Create variable, and assign initial value the index
    
    for (var i = 1; i < obj[key].length; i++) {       // Loop through to compare each value of elements in array, we start with i = 1 as index 0 was assigned earlier
      if (smallestValue > obj[key][i]) {              // Compare index 0 with index 1, 
        smallestValue = obj[key][i];                  // if index 0 is larger we reassigned to the next index
      }
    }
    
    return smallestValue;                             // Return our variable
    
  }
  
  var obj = {
    key: [2, 1, 5]
  };
  
  var output = getSmallestElementAtProperty(obj, 'key');
  console.log(output); // --> 1