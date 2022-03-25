const controller = async (req, res) => {
  await doA();
  // console.log(doA)

  await doB();
  // console.log(waitB)
};

const doA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("looping doA"));
    }, 11000);
  });
};
const doB = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("looping doB"));
    }, 1000);
  });
};

controller();
