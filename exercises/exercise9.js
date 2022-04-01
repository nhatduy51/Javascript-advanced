const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const newValue = Math.floor(Math.random() * 20);
    resolve(newValue);
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const newValue = Math.floor(Math.random() * 20);
    resolve(newValue);
  }, 8000);
});

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const newValue = Math.floor(Math.random() * 20);
//     resolve(newValue);
//   }, 2000);
// });
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // const newValue = Math.floor(Math.random() * 20);
    reject(0);
  }, 2000);
});
const fetchAsyncData = async () => {
  const res = await Promise.allSettled([promise1, promise2, promise3]);
  console.log(res);
};

fetchAsyncData();
