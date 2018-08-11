function findMinLengthOfThreeWords(word1, word2, word3) {
    // Use the Math.min() to return the lowest number in it's parameter group.
    return Math.min(word1.length, word2.length, word3.length)

}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);