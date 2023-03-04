//Simple multiplication
function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8: number * 9;
   
 }

//If you can't sleep, just count sheep!!
const countSheep = (num) => {
    let sheep = ''
       for (let i = 1; i <= num; i++){
         sheep += i + ' sheep...'
       }
      return sheep;
    }

// Simple multiplication
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8: number * 9;

}

//Filter out the geese

const gooseFilter = (birds) => {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((item) => !geese.includes(item))
};


//Even or Odd

let evenOrOdd = (number) => {
  return number % 2 == 0 ? 'Even' : 'Odd'
}

// Fun with ES6 Classes #1 - People, people, people


class Person {
  constructor(firstName = 'John',lastName = 'Doe',age = 0,gender = 'Male'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    
Person.greetExtraTerrestrials = function(raceName){
      return `Welcome to Planet Earth ${raceName}`;
};
  }
  sayFullName(){
    return `${this.firstName} ${this.lastName}`;
  }

}

// Make an array of numbers that are doubles of the first array


let double = arr => arr.map(i => i * 2)
console.log(double([2, 3, 5]));


// Take an array of numbers and make them strings

function someArr(arr) {
  return arr.map(i => i.toString())
}
console.log(someArr([2, 3 ,5]))


// Capitalize each of an array of names

let capitLetter = arr => arr.map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
console.log(capitLetter(['hello', 'jonny']));




