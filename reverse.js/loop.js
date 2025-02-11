const numbers = [1, 2, 3, 4, 5];


// NOTE:for of loop = for arrays

// console.log( numbers);

// for( const number of numbers) {
//     console.log( number);
// }



// NOTE:while loop =  until condition is true the loop will run

// let i = 0; //initialization

// while ( i <= 5) { //condition
//     console.log( i);
//     i++; //increment
// }

// NOTE:while loop sum technique

// let number = 1;  
// let sum = 0;

// while ( number <= 10){
//     sum = sum + number;
//     console.log(sum);
//     number++;

// }

//NOTE: While loop even number sum technique

// let number = 1;

// while ( number <= 10){
    
//     if (number % 2 === 0){
//         console.log('Even number', number);
//     }
//     number++;
// }


//NOTE: While loop reverse technique

// let number = 10;

// while (number >= 0 ) {
//     console.log(number);
//     number--;
// }




//NOTE: For loop technique

// for (
//     let i = 0; //initialization
//     i <= 5; //condition
//     i++ //increment
//     ) {
//     console.log(i);
// }       

//NOTE: For loop sum technique

// let sum = 0;

// for ( let i = 11; i <= 20; i++) {
//     sum = sum + i;
//     console.log(sum);
// }

//NOTE: For loop reverse technique

// for ( let i = 20; i >= 0; i--) {
//     console.log(i);
// }


//NOTE: odd numbers technique

// Way 1
// for ( let i = 1; i <=10; i++){
//     if  (i % 2 !== 0 ){
//         console.log(i, 'Odd number');
//     }
// }

// Way 2
// for ( let i = 1; i <=10; i++){
//     if  (i % 2 === 1 ){
//         console.log(i, 'Odd number');
//     }
// }

//Way 3
// for ( let i = 1; i <=10; i= i+2){
   
//         console.log(i, 'Odd number');
    
// }



// NOTE: skip / continue statement + give me the sum of numbers from 1 to 30 which are divisible by 3 
// let sum = 0;

// for ( let i = 1; i <=20; i++){
//     if( i%3 === 0){
//         sum = sum + i;
//         console.log(sum);
//     }
//     else {
//         continue;
//     }
// }


//NOTE: Break statement

// for ( let i = 1; i <= 20; i++){
//     console.log(i);
//     if ( i === 10){
//         break;
//     }
// }


//Note: Do-while loop

// let i = 0;
// while ( i <= 5){
//     console.log(i);  //NOTE: while loop checks the condition first and then executes the code but do-while loop executes the code first and then checks the condition
//     i++;
// }


// let i = 10;
// do {
//     console.log(i);   //NOTE: do-while loop executes the code first and then checks the condition
//     i++;
// }
// while ( i <= 5);

