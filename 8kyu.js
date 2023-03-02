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

// Be Concise IV - Index of an element in an array

let find = (a, e) =>{
  let i = a.indexOf(e);
  if (i != -1) {
    return i;
  }
    return 'Not found'
  }

  // Vowel Count
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