function squareElements(arr) {
    var squared = []                            // Create our variable to be returned       
    
    for (var i = 0; i < arr.length; i++) {      // Loop through our array
      squared.push(arr[i] * arr[i]);            // Push the squared indexed value to squared
    }

    return squared;                             // Return our modified variable
  }
  
  var output = squareElements([1, 2, 3]);
  console.log(output); // --> [1, 4, 9]