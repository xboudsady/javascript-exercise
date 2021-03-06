function getElementsGreaterThan10AtProperty(obj, key) {
    var myArr = [];                         // Create empty array to hold our array to be returned
    for (var props in obj[key]) {           // Loop through our object, key properties
      if (obj[key][props] > 10) {           // Test condition in our loop
        myArr.push(obj[key][props]);        // If true, push obj, key properties into our array
      }
    }
    return myArr;                           // Return our array
  }
  
  var obj = {
    key: [1, 20, 30]
  };
  
  var output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]