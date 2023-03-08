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

