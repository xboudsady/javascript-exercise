function computeAverageOfNumbers(nums) {
    // Check if array is empty, if true return zero
    if (nums.length === 0) {
        return 0;
    }

    // Store our sum
    var sum = 0

    // Loop through array to add up the numbers
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i]
    }

    // Return the average
    return sum / nums.length;

}

var input = [1, 2, 3, 4, 5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3