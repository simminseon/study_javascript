/*** 1번 ***/
var nums = [100, 200, 300, 400, 500];
nums.splice(3, 2);
console.log(nums);

/*** 2번 ***/
var arr = [200, 100, 300];
arr.splice(2, 0, 10000);
console.log(arr);

/*** 3번 ***/
var arr = [100, 200, 300];
console.log(typeof arr);
// 답 : 4번 object

/*** 4번 ***/
// 답 : 2번 number

/*** 5번 ***/
var a = 10;
var b = 2;
for (var i = 1; i < 5; i += 2) {
  a += i;
}
console.log(a + b);
console.log(a);

/*** 6번 ***/
// 답 : 2번

/*** 7번 ***/
// 답 : 2,3,5번

/*** 8번 ***/
// 답 : 84

/*** 9번 ***/
// 데이터
var year = "2019";
var month = "04";
var day = "26";
var hour = "11";
var minute = "34";
var second = "27";

var result = year.concat(`/${month}/${day} ${hour}:${minute}:${second}`);
console.log(result);

/*** 10번 ***/
var tree = function(number) {
  for (var i = 1; i <= number; i++) {
    let star = "";
    // 공백 증가 반복문
    for (var k = 1; k <= number - i; k++) {
      star = star + " ";
    }
    // 별 증가 반복문
    for (var j = 1; j <= i * 2 - 1; j++) {
      star = star + "*";
    }
    console.log(star);
  }
};
tree(5);

/*** 11번 ***/
let s = 0;
for(var i = 1; i <= 100; i++) {
  s += i
}
console.log(s);
