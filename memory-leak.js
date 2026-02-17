// A memory leak happens when your app keeps holding onto memory it no longer needs. Over time, this unused memory piles up, your page gets slower, it can stutter, and in worst cases the tab crashes.

// The most common causes (with tiny examples)

// 1.You start a timer and never stop it—so it keeps references alive.
function start() {
    const bigArray = new Array(1e6).fill("data"); // heavy memory
    setInterval(() => {
        console.log(bigArray[0]);
    }, 1000);
}
// start();

// Fix:
let id;
function start() {
    const bigArray = new Array(1e6).fill("data"); // heavy memory
    id = setInterval(() => {
        console.log(bigArray[0]);
    }, 1000);
}
// start();
function stop(id) {
    clearInterval(id);
    id=null; // help GC by dropping references
}


//2. You add event listeners to elements (or window) and forget to remove them when the element is gone.
class MyEmitter extends EventEmitter { };
const myEmitter = new MyEmitter();

// event listner, When 'read' is emitted, this callback will run
myEmitter.on('read', () => console.log("Event read Fired!"));

// Triggers the 'event', All listeners registered for 'event' will execute
myEmitter.emit('read');

myEmitter.removeEventListener("read", () => {
    console.log("event read is removed");
})

// 3. Closures that capture large data
// A function that “remembers” outer variables can accidentally keep big objects alive.
function setUp() {
    let huge = new Array(1e6).fill("data");

    return function () {
        // ❌ Just referencing `huge` keeps it alive even if you don't use it
        console.log('ready');
    }
}
// const log = setUp(); huge is now stuck as long as `log` exists

// 6) Growing data structures that never get cleared
// Maps, arrays, or caches that only ever grow.
// Remove when not needed, or use a WeakMap if keys are objects.


// Best practices to avoid leaks

// Always clean up: clearInterval, clearTimeout, removeEventListener on unmount/teardown.
// Avoid unnecessary globals: Keep data scoped; use modules and closures carefully.
// Use WeakMap/WeakSet for caches keyed by objects (DOM nodes, component instances).
// Break references: Set variables to null when something is truly done and long‑lived.
// Throttle/debounce event handlers to avoid excessive allocations.