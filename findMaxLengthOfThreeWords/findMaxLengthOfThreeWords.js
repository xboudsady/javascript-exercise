function findMaxLengthOfThreeWords(word1, word2, word3) {
    // Use the Math.max() to return highest value of passed in parameter group
    return Math.max(word1.length, word2.length, word3.length);
}

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3