function isEven(num) {
    if (num % 2 === 0) {        // Use the modulus operator to check for even
      return true               // Return true
    }
    return false;               // Return false
  }
  
  var output = isEven(11);
  console.log(output); // --> false