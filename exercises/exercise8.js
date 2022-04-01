const a = () => {console.log('a')};
const b = () => {console.log('b')};

const main = () => {
    setImmediate(b);
    process.nextTick(a);
}
main();
// process.nextTick()sẽ được thực hiện trên lần lặp hiện tại của vòng lặp sự kiện, 
// sau khi hoạt động hiện tại kết thúc. Điều này có nghĩa là nó sẽ luôn thực thi trước setTimeout và setImmediate.

// A setTimeout() gọi lại với độ trễ 0ms rất giống với setImmediate(). 
// Thứ tự thực thi sẽ phụ thuộc vào các yếu tố khác nhau, nhưng cả hai đều sẽ được chạy trong lần lặp tiếp theo của vòng lặp sự kiện.