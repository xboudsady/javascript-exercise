function getIndexOf(char, str) {
    // Loop through our string 
    for (var i = 0; i < str.length; i++) {
        // If a match is found, return it's value
        if (str[i] === char) {
            return i;
        }
    }
    // If no character is found
    return -1;
}

var output = getIndexOf('a', 'I am a hacker');

console.log(output); // --> 2