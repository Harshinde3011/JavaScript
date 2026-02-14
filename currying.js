// Currying means breaking a function that takes multiple inputs into several smaller functions, that each function take one input at a time.

// Normal function
function calculateSum(a,b,c) {
    let sum = a+b+c;
    return sum;
}

console.log(calculateSum(10,20,30));


// currying funciton
function calculateSumByCurrying(a) {
    return function (b) {
        return function (c) {
            console.log(a+b+c);
            return a+b+c;
        }
    }
}

calculateSumByCurrying(10)(20)(30);