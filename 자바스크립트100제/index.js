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

/*** 12번 ***/
class Wizard{
  constructor(health, mana, armor){
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack(){
    console.log('파이어볼')
  }
}
const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

/*** 13번 ***/
// const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
// const planetsN = prompt('몇번째 행성 출력을 원하시나요?');
// console.log(planets[planetsN-1]);

/*** 14번 ***/
// const num14 = prompt("숫자를 입력하세요");
// if(num14 % 3 == 0 && num14 != 0) {
//   console.log("짝")
// } else {
//   console.log(num14)
// }

/*** 15번 ***/
// const num15 = prompt('이름을 입력하세요');
// console.log(`안녕하세요 저는 ${num15} 입니다.`)

/*** 16번 ***/
// const num16 = prompt("문장 입력");
// console.log(num16.split('').reverse().join(''));

/*** 17번 ***/
// const num17 = prompt("키 입력");
// if(num17 >= 150) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

/*** 18번 ***/
// const num18 = prompt('세 과목 점수 입력').split(' ');
// let sum = 0;
// for(let i = 0; i < num18.length; i++) {
//   sum = sum + parseInt(num18[i], 10);
// }
// console.log(Math.floor(sum/num18.length));

/*** 19번 ***/
// const num19 = prompt().split(' ');
// console.log(Math.pow(parseInt(num19[0], 10), parseInt(num19[1], 10)));

/*** 20번 ***/
// const num20 = ['7', '2'];
// let val1 = Math.floor(parseInt(num20[0], 10)/parseInt(num20[1], 10));
// console.log(val1);

// let val2 = parseInt(num20[0], 10)%parseInt(num20[1], 10);
// console.log(val1, val2);

/*** 21번 ***/
// ?

/*** 22번 ***/
// 2번

/*** 23번 ***/
// x

/*** 24번 ***/
var string = 'mary';
console.log(string.toUpperCase());

/*** 25번 ***/
var pie = function(n) {
  return n * n * 3.14;
  console.log(pie);
}
pie(2);

/*** 26번 ***/
const planets = {
  수성 : 'Mercury',
  금성 : 'Venus',
  지구 : 'Earth',
  화성 : 'Mars',
  목성 : 'Jupiter',
  토성 : 'Saturn',
  천왕성 : 'Uranus',
  혜왕성 : 'Neptune'
}
console.log(planets.토성);

/*** 27번 ***/
const key = prompt().splite(' ');
const values = prompt().split(' ');
let obj = {};

for(let i = 0; i < keys.length; i++){
  obj[keys[i]] = values[i];
}
console.log(obj);

/*** 28번 ***/
const word = '안녕하세요';
for(let i = 0; i < word.length-1; i++){
  console.log(word[i], word[i+1]);
}

/*** 29번 ***/
const word = promtp();
if(word === word.toUpperCase()) {
  console.log('Yes');
} else {
  console.log('No');
}

/*** 30번 ***/
const word = '파인애플은 정말 맛있습니다.';
const keyword = '애플';

console.log(word.indexOf(keyword))