//sự khác nhau giữa for thường và for each;

//for thường: - truy cấp giá trị của mảng thông qua index
//           - for thường sẽ tính khoản trống
// ex 

const arrA = [1, 3, , 5]
console.log(arrA.length) // output => 4

for(let i = 0; i < arrA.length; i++) {
    console.log(arrA[i])
}

//for each : - truy xuất đến phần tử trong element
//           -  bỏ qua phần tử trống
// ex 
console.log('for each');
const arrV = [1, 3, , 5]
arrV.forEach((v) => console.log(v));


