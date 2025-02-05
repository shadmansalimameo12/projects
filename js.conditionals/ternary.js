// const age = 18;

// age >= 18 ? console.log('vote diyo') : console.log('ghumai thako')

let price = 1100;
const isLeader = true;

// if( isLeader == true){
//     price = 0;
// }
// else {
//     price = price + 100;
// }
// console.log(price)



//nested version
// price = isLeader === true ? price = 0 : price + 100 ;
// console.log(price)

//optional: semi-advanced ternary

// if ( isLeader === true ){
//     if( price > 1000){
//         price = price /2;
//     }
//     else{
//         price = 0;
//     }
// }

// else{
//     price = price + 100 ;
// }
// console.log( price)


//converting to ternary


price = isLeader === true ? price > 1000 ? price/2 : 0 : price + 100 ;


console.log(price)