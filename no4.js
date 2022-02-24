// No 4
let input = 2468;
let result = [];
let myFunc = (num) => Number(num);
var intArr = Array.from(String(input), myFunc);

intArr.map((e, index) => {
  if (
    intArr[index] % 2 === 0 &&
    intArr[index + 1] !== undefined &&
    intArr[index + 1] % 2 === 0
  ) {
    result.push(e);
    result.push("-")
  }else{
    result.push(e);
  }
});

result = result.join().replace(/,/g, '');
console.log(result);
