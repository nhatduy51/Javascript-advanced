const controller = () => {
   console.log(loopingArr(1000)) ;
};

const loopingArr = (arr) => {
  const array = Array.from(Array(arr).keys());
  array.forEach((element) => {
    //   console.log(element)
  });

  

};
controller();
