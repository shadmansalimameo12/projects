const weight =  120 ;
const height = 1.7018;
const Bmi = (weight  / (height)**2)

if (Bmi < 18.5){
    console.log('you are underweight')
}
else if (Bmi >= 18.5 && Bmi <= 24.9){
    console.log('you are normal'); 
}
else if(Bmi >= 25 && Bmi <= 29.9){
    console.log('you are overweight');
}

else{
    console.log('you are obese')
}