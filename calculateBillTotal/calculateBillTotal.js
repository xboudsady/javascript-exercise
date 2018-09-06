function calculateBillTotal(preTaxAndTipAmount) {
    const salesTax = preTaxAndTipAmount * 0.095;    // Find the sales ax
    const tip = preTaxAndTipAmount * .15;           // Find the tip amount

    return preTaxAndTipAmount + salesTax + tip;     // Return the sum

}

var output = calculateBillTotal(20);
console.log(output); // --> 24.9