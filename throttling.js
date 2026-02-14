// throttling: throttling is cocept used to optimise the performance of web-apps, by limiting the rate of function execution, in Throttling ensures a function executes at most once in a fixed time interval, regardless of how many times it is invoked during that interval


function clickButton(msg){
    console.log("Button is clicked", msg);
}

function throttle(fn, limit) {
  let functionFlag = true;

  return function (...args) {
    if (!functionFlag) return;

    fn.apply(this, args);
    functionFlag = false;

    setTimeout(() => {
      functionFlag = true;
    }, limit);
  };
}


const throttelingFunction = throttle(clickButton, 2000);

for (let i = 1; i <= 100; i++) {
  throttelingFunction(i);
}
