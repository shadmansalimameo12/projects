const persons = [ 'ameo','shuchi','anonto','arnob'];

const sortedPersons = persons.sort();
console.log(sortedPersons);

//NOTE: doesn't work properly   
// const numbers = [ 2,15,39,69,17,34];
// const numbers_asc = numbers.sort();     
// console.log(numbers) 

// const numbers = [ 2,15,39,69,17,34];
// const numbers_asc = numbers.sort(function(a,b){return a - b });      //Ascending
// console.log(numbers_asc)        
// const numbers_dsc = numbers.sort(function(a,b){return b - a });     //Descending 
// console.log(numbers_dsc) 



// NOTE:original array ke copy kore nite hoy cause array ke sort e dhalle original array ke change kor dey
const numbers = [ 2,15,39,69,17,34];
const numbers_asc = [...numbers].sort(function(a,b){return a - b });      //Ascending
console.log(numbers)        
const numbers_dsc = [...numbers].sort(function(a,b){return b - a });     //Descending 
console.log(numbers_dsc) 
