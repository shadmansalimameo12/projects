const regularPrice = 800;
const age = 50;
const isStudent = false;
const studentDiscount = regularPrice - regularPrice * 50 / 100  ;

if(age < 10){
    console.log('You are a child, you get a free ticket');
}
else if( isStudent ){
    
    console.log(studentDiscount);
}
else if( age >= 60){
    console.log( regularPrice -  regularPrice * 15 / 100 );
}
else{
    console.log(regularPrice);
}