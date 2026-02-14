// Memoization in JavaScript is an optimization technique where you cache the result of a function so that future calls with the same inputs return instantly, without re-executing the function.


// Basic Example (Without Memoization)
function slowSquare(n) {
    console.log("Calculating...");
    
    return n*n;
}

slowSquare(5);
slowSquare(5);

// ✅ Memoized Version
function memoizedSquare() {
    const cache = {};

    return function (n) {
        if (!cache[n]) {
            console.log("Oops value not in cache...!");
            
            const result = n*n;
            cache[n] = result;
            return cache[n];
        }else {
            console.log("value is already in cached!");
            return cache[n];
        }
    }
}

const square = memoizedSquare();
square(5);
square(5);