function getFirstElementOfProperty(obj, key) {
    // Checks if key properties is not an array, or value is not empty, or key does not exist
    if (!Array.isArray(obj[key] || obj[key] === '' || !(obj[key]))) {
      return undefined
    }
    // return the first value using the shift() mtehod
    return obj[key].shift()
  }
  
  var obj = {
    key: [1, 2, 4]
  }
  
  var output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1