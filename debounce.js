// debounce ensures that a function runs only after a certain delay passed, since the last time it was called, it used for optimizing the performance of the web-app, by limiting the rate of execution particular function

function fetchUsers(query) {
    console.log("API calls for: ", query);
}

function debounce(fn, delay) {  //  control how often fn executes
    let timer;
    
    return function (...args) {
        clearTimeout(timer);  // clearTimeout() is a built-in JavaScript function used to cancel a scheduled task that was created using setTimeout().
        
        timer = setTimeout(() => {
            console.log("args: ", ...args);
            
            fn.apply(this, args)  // args is an array, but apply() spreads that array into individual parameters, so the function receives "h" instead of ["h"].
        }, delay)
    }
}

const debouncedSearch = debounce(fetchUsers, 500);  

debouncedSearch("h");
debouncedSearch("ha");
debouncedSearch("har");
debouncedSearch("harsh");

// h  → timer set
// ha → timer cleared, new timer set
// har → timer cleared, new timer set
// harsh → timer cleared, new timer set
// (wait 500ms)
// 👉 fn runs once
