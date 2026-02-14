// In JavaScript, many operations like API calls or database queries are asynchronous.
// Traditionally, we handled them using Promises with .then() and .catch().
// async/await is syntactic sugar over Promises that improves readability.
// An async function always returns a Promise, and await pauses the execution of that function until the Promise resolves or rejects.
// We handle errors using try/catch, just like synchronous code.

// ans: asycn is keyword which used with function and inside that async function keyword await will be used to handle promises,
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getData();


// before async await, when we write async keyword before function it will return a promise by default
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise one is resolved")
    }, 5000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise two is resolved")
    }, 10000)
});

async function handlePromise() {
    p.then(res => {
      console.log(res);
    });
    console.log("This will log immediately, it won't for promise to resolve");
}

// handlePromise();

// after await keyword
async function handlePromiseUsingAwait() {
  console.log("js reaches to handlePromiseUsingAwait");
  
  const resultOne = await p1;
  console.log("result of promise one: ", resultOne);   // this contain result of resolved promise
  console.log("This will await for promise to resolve");

  const resultTwo = await p2;
  console.log("result of promise two: ", resultTwo); 
}

handlePromiseUsingAwait(); 


// in above case after 5 sec promise one logs will be printed, and then after 5s(5+5=10s) promise two logs will get printed
// but if you increase the time of promise one to 10s and decrease the time of promise two to 5s then, 1st promise ones result get printed in 10s and then immideatly promise two logs will get printed. cause it already resolved in 5sec

// initially when you run a program handlePromiseUsingAwait(); this is pushed into callstack and starts execution line by line
// 1st. it logs "js reaches to handlePromiseUsingAwait" then go to next line 
// 2nd. it sees await then it wont js won't wait to promise get resolved it immedeatly GEC will poped out from callStack, basically it doesnt block the callStack
// after 5 sec again handlePromiseUsingAwait() will come into callStack and start execution where it left, which means it dont start form line no 42, it starts from line 44, then 45, and then 46
// again it just pop out from callstack cause their word await at line no 48, after 10s it came to executes the remaining code
// means total time to executes the both promises will be 10s not 15sec


const API_URL = "https://api.github.com/users/Harshinde3011";

async function fetchMyGitHubProfile(url) {
  const data = await fetch(url);

  const jsonValue = await data.json();  // here we convert response into json

  console.log(jsonValue);
  
  // fetch is webAPI which will you a promise, when it get resolved it give a response object, which again a promise to make it readable we convert it into JSON using .json
}

fetchMyGitHubProfile(API_URL);