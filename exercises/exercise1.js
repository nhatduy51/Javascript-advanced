setTimeout(() => {
  console.log("hello event loop");
}, 0);

const sleep = (delay) => new Promise (( resolve) => setTimeout (resolve, delay))
sleep(5000);
