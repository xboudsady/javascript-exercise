function filterOddLengthWords(words) {
    // use filter, and pass in a callback function to fid odd number length
    return words.filter(word => word.length % 2 !== 0);
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']