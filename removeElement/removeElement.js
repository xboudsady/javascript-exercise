function removeElement(array, discarder) {
    return array.filter(array => array !== discarder);  // Use the filter() method to filter out elements you dont want
  }
  
  var output = removeElement([1, 2, 3, 2, 1], 2);
  
  console.log(output); // --> [1, 3, 1]