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

