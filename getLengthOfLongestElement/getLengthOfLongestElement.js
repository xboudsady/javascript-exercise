function getLengthOfLongestElement(arr) {
    if (arr.length === 0) {
      return 0;
    }
    
    var longestLength = 0;
    
    arr.forEach(word => {
      if (longestLength < word.length) {
        longestLength = word.length;
      } else {
        longestLength = longestLength;
      }
    })
    
  
    
    return longestLength;
    
  }
  
  var output = getLengthOfLongestElement(['one', 'two', 'three']);
  console.log(output); // --> 5