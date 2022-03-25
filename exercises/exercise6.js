const food = { beef: 'thit', bacon: 'suon', egg: 'trung' }

// "Spread"
const foodClone = { ...food }
console.log(foodClone)

// "Object.assign"
console.log(Object.assign({}, food)) 

//clone
const foodB = food;
console.log(foodB);

const clone = JSON.parse(JSON.stringify(food));
console.log(clone);

//shollow copy
const obj = {a:1,b:2,c:{d:3}};

const shallowClone = {...obj};

obj.c.d = 34; // chúng ta thay đổi giá trị d của object gốc
console.log(obj); // kết quả cho chúng ta thấy {a:1,b:2,c:{d:34}} 
console.log(shallowClone); // nhưng object mà chúng ta clone ra cũng bị thay đổi theo {a:1,b:2,c:{d:34}}

//deep copy

const deepClone = JSON.parse(JSON.stringify(obj));
console.log(deepClone); // {a:1,b:2,c:3};

obj.c.d = 34;
console.log(obj); // {a:1,b:2,c:{d:34}}
console.log(deepClone); // {a:1,b:2,c:{d:3}}

const deepcopy = JSON.parse(
    JSON.stringify({
      a: new Date(),
      b: NaN,
      c: new Function(),
      d: undefined,
      e: function() {},
      f: Number,
      g: false,
      h: Infinity
    })
  )
  console.log(deepcopy)