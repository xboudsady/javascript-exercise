# Challenge

Write a function called "`calculateBillTotal`".

Given the pre tax and pre tip amount of a meal, "`calculateBillTotal`" returns the total amount due after tax and tip.

Notes:
* Assume that sales tax is `9.5%` and tip is `15%`.
* **Do NOT** tip on the sales tax, only on the pre tip amount.


# Solution

```javascript
function calculateBillTotal(preTaxAndTipAmount) {
    const salesTax = preTaxAndTipAmount * 0.095;    // Find the sales ax
    const tip = preTaxAndTipAmount * .15;           // Find the tip amount

    return preTaxAndTipAmount + salesTax + tip;     // Return the sum

}

var output = calculateBillTotal(20);
console.log(output); // --> 24.9
```