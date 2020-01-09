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

console.log(word.indexOf(keyword));

/*** 31번 ***/
// 답 : 3,5번

/*** 32번 ***/
const words = "안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.";
console.log(words.split(" ").length);

/*** 33번 ***/
const nums = "1 2 3 4 5";
const arr = nums.split(" ").reverse();
let reverseVal = "";

for (let i = 0; i < arr.length; i++) {
  reverseVal = reverseVal + (arr[i] + " ");
}
console.log(reverseVal);

/*** 34번 ***/
const unsorted = "176 156 155 165 166 169";
let sorted = "";
sorted = unsorted
  .split(" ")
  .sort(function(a, b) {
    return a - b;
  })
  .join(" ");
console.log(sorted);

if (unsorted == sorted) {
  console.log("Yes");
} else {
  console.log("No");
}

/*** 35번 ***/
function one(n) {
  function two(x) {
    return Math.pow(x, n);
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

/*** 36번 ***/
const num = 2;
let result = "";
for (let i = 0; i < 9; i++) {
  result = result + (num * (i+1) + " ");
}
console.log(result);

/*** 37번 ***/
const array = ['원범', '원범', '원범', '원범', '원범', '혜원', '혜원', '혜원', '혜원'];
let result2 = {};
let winner = "";

for(let index in array) {
  let val = array[index];
  result2[val] = result2[val] === undefined ? 1 : result2[val] = result2[val] + 1;
}
console.log(result2);
winner = Object.keys(result2).reduce(function(a, b) {
  console.log(a, b);
  return result2[a] > result2[b] ? a: b
});
console.log(winner);
console.log(`${winner}(이)가 총 ${result2[winner]}표로 반장이 되었습니다.`);

/*** 38번 ***/
const scores = ['97', '86', '75', '55', '72', '80', '64'];
scores.sort(function(a, b){
  return a - b;
})
console.log(scores);
let score = [];
let count = 0;
while(score.length < 3){
  let value = scores.pop();
  if(!score.includes(value)){
    score.push(value);
  }
  count++;
}
console.log(count);

/*** 39번 ***/
const word = 'hqllo my namq is hyqwon';
console.log(word.split('q').join('e'));

/*** 40번 ***/
const weightLimit = '100';
const memberCount = '5';
let count = 0;
let totalWeight = 0;

for(let i = 0; i < memberCount; i++){
  totalWeight = totalWeight + parseInt('50', 10);
  if(totalWeight <= weightLimit){
    count++;
  }
}
console.log(count);

/*** 41번 ***/
const prime = 7;
function primeFunc(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log("No");
      return false;
    }
  }
  if (prime === 1) {
    console.log("No");
    return false;
  }
  console.log("Yes");
}
primeFunc(prime);

/*** 42번 ***/
const day = ["SUN", "MON", "TUE", "WED", "THU", "TRI", "SAT"];
const month = '5';
const date = '5';
function solution(a, b) {
  const theDay = new Date(`2020-${a}-${b}`);
  console.log(day[theDay.getDay()]);
}
solution(month, date);

/*** 43번 ***/
let dec = 160;
console.log(dec.toString(2));

/*** 44번 ***/
let num = '1234';
let sum = 0;
while(num){
  sum = sum + num%10;
  num = Math.floor(num/10);
}
console.log(sum);

/*** 45번 ***/
const theDate = new Date();
console.log(Math.floor(theDate.getTime()/(60*60*24*365*1000))+1970);

/*** 46번 ***/
let arr = [];
let total = 0;
for(let i = 0; i < 20; i++){
  arr[i] = i + 1;
}

arr.forEach((n) => {
  while(n){
    total = total + n%10;
    n = Math.floor(n/10)
  }
});
console.log(total);