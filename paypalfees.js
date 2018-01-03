/*

    Usage: node paypalfees.js [amount of desired payment in USD]

    A calculator for sending payments for goods and services from Canada to the US

    Outputs to console an amount adjusted so that, after paypal charges the recipient all applicable fees, 
    the remaining balance will be the intended payment.

    Accurate to within $0.01 as of January 3 2018 (based on a sample size of 2 payments)

 */

function adjustedPayment(baseAmt){
    var pctFee = 0.0441;
    var flatFee = 0.3;

    var tempTotal = baseAmt*(1+pctFee) + flatFee;
    while( ((tempTotal - baseAmt) <= (tempTotal*pctFee + flatFee)) ){
        tempTotal += 0.01;
    }
    tempTotal = Math.round(tempTotal*100)/100;
    return tempTotal;
}

console.log("");
console.log("------------------\nTo pay $"+process.argv[2]+" send $"+adjustedPayment(process.argv[2]));

