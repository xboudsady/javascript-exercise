function filterEvenLengthWords(words) {
    // Use the array.filter() method to pass in a callback function to test for even length words
    return words.filter(word => word.length % 2 === 0);
  }
  
  var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
  
  console.log(output); // --> ['word', 'word']