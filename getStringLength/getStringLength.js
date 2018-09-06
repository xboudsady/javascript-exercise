function getStringLength(string) {
    let count = 0;                  // Create a variable to store our initial count value

    while (string) {                // Use while loop and pass in our string which is an array of characters
        string = string.slice(1);   // Slice the first value of the array of character, then iterate +1 to count
        count++                     // Continue till theres no more characters to slice, condition is false, and loop ends
    }

    return count;                   // Return our count value

}

var output = getStringLength('hello');
console.log(output); // --> 5