function getAllButLastElementOfProperty(obj, key) {
    if (!obj.hasOwnProperty(key)) {                     // Check for porperty in obj
      return [];
    }
    
    if (!Array.isArray(obj[key])) {                     // Check of value is an array
      return [];
    }
    
    if (obj[key].length === 0) {                        // Check if that array is a string
      return [];
    }
    
    var allButLast = []                                 // Create our array to be returned
    
    for (var i = 0; i < obj[key].length -1; i++) {      // Loop through our array excelt last element
      allButLast.push(obj[key][i]);                     // Push each iteration to or array
    }
    
    return allButLast;                                  // Return our array
  }
  
  var obj = {
    key: [1, 2, 3]
  };
  
  var output = getAllButLastElementOfProperty(obj, 'key');
  console.log(output); // --> [1, 2];