function getOddElementsAtProperty(obj, key) {
  
    if (!obj.hasOwnProperty(key)) {             // Check if our obj has a key property
      return [];
    }
    
    if (!Array.isArray(obj[key])) {             // Check if obj key property is an array
      return [];
    }
    
    var myArr = [];                             // Create an Array to be stored
    
    for (var prop in obj[key]) {                // Iniate loop through our objec key properties
      if (obj[key][prop] % 2 !== 0) {           // Test condition for odds
        myArr.push(obj[key][prop]);             // If true, push to our array
      }
    }
    return myArr;
    
  }
  
  var obj = {
    key: [1, 2, 3, 4, 5]
  };
  
  var output = getOddElementsAtProperty(obj, 'key');
  console.log(output); // --> [1, 3, 5]