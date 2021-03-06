function getElementOfArrayProperty(obj, key, index) {
    if (!obj.hasOwnProperty(key)) {         // Check if obj has a key
      return undefined
    }
    
    if (!Array.isArray(obj[key])) {         // Check if the key is an array
      return undefined;
    }
    
    return obj[key][index];                 // Return the index position
  }
  
  var obj = {
    key: ['Jamil', 'Albrey']
  };
  
  var output = getElementOfArrayProperty(obj, 'key', 0);
  console.log(output); // --> 'Jamil'