// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr) {
    return arr.filter(i => i > 5)
  }
  // test
  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]


  //  2) Given an array of numbers, return a new array that only includes the even numbers.
  function evensOnly(arr) {
    return arr.filter(i => i % 2 === 0)
  }
  // test
  console.log(evensOnly([3, 6, 8, 2, 9])); /// [6, 8, 2]


// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(i => i.length <= 5)
  }
  // test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]


  // 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
  function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(i => i.member === true)
  }
  // test
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]
  
  
  // 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
  function ofAge(arr){
    return arr.filter(i => i.age >= 18)
  }
  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ])); 
  // => 
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]


// var arr1 = [1, 2, [3, 4]];
// arr1.flat();

// // В одномерный массив
// let i = arr1.reduce((acc, val) => acc.concat(val), []);// [1, 2, 3, 4]
// console.log(i)


// 6)Для развёртывания многомерных массивов используем рекурсию, reduce и concat
const arr = [1, 2, [3, 4, [5, 6, 7]]];

function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

console.log(flatDeep(arr, Infinity));


let j = [1,2,3,4,5].slice(2)
console.log(j)


// 7)Sum of Minimums!


function sumOfMinimums(arr) {
  const newArr = arr.map((el) => el.sort((a,b) => a-b))
 return newArr.reduce((a,b) => a + b[0], 0)
}

console.log(sumOfMinimums([ 
  [ 2, 5, 3, 1, 5 ], 
  [ 10, 6, 7, 5, 9 ], 
  [ 25, 20, 34, 100 ]
]));
 
// 8. Century From Year

function century(year) {
    return Math.floor((year-1)/100) + 1;
}

 // 9. Basic Mathematical Operations

let basicOp = (operation, value1, value2) => eval(value1 + operation + value2);

// 10. String ends with?

function solution(str, ending){
 let n = str.slice(str.length - ending.length);
  if (str.length < ending.length) {
    return false;
  }
 return ending.includes(n)
}


// 11. Reversed Words

let reverseWords = (str) => str.split(' ').reverse().join(' '); 


// 12. Price of Mangoes
function mango(quantity, price){
  return price * (quantity - Math.floor(quantity / 3));
}


// 13. Vowel Count

function getCount(str) {
  var vowelsCount = 0;
  var vowels = "aeiouAEIOU";
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

// or
function getCount(str) {
    let count = 0;
let vowels = ["a", "e", "i", "o", "u"]
    for (let letter of str) {
        if (vowels.includes(letter)) {
            count++;
        }
      
    }

         return count
    
}
    