function getEvenElementsAtProperty(obj, key) {
    if (!obj.hasOwnProperty(key)) {             // Check if obj has a key
      return [];
    }
    
    if (!Array.isArray(obj[key])) {             // Check if obj properties is an array
      return [];
    }
    
    var myArr = [];                             // Create our array to be returned
    
    for (var element in obj[key]) {             // Loop through our obj key
      if (obj[key][element] % 2 === 0) {        // Check if obj key property element is event
        myArr.push(obj[key][element]);          // If true, push to our array
      }
    }
    
    return myArr;                               // Return our array
    
  }
  
  var obj = {
    key: [1000, 11, 50, 17]
  };
  
  var output = getEvenElementsAtProperty(obj, 'key');
  
  console.log(output); // --> [1000, 50]