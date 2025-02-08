// for ( number = 1; number <= 200; number++){
//     console.log(number);
//     if (number === 100){
//         break;
//     }


// }
// console.log("This is the end of the loop");

// ----------------------------------------------------------------------------------------------------------------------------

// number = 1;

// while ( number <=200){
//     console.log(number);
//     if (number === 100){
//         break;
//     }
//     number++;
// }

// ----------------------------------------------------------------------------------------------------------------------------


let num = 1;
let sum = 0;

while (num <= 100){
    console.log(num);
    sum = sum + num;
    console.log(sum);
    if (sum >= 100){
        break;
        
        
    }
    
    num++;
}
console.log('This is the end of the loop');