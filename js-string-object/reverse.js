// const sentence = 'I am a student of class ten.';

//Note:method1
// let reverse = '';

// for (const letter of sentence){
//     reverse = letter + reverse;
    
// }
// console.log(reverse);

//Note:method2
// const sentence = 'I am a student of class ten.';
// let reverse = '';

// for ( i = 0 ; i < sentence.length; i++){   
//  //Note: i refers to index number, here the reason of using i< sentence.length instead of i<=sentence.length is that the index of the last letter of the sentence is 27  . So, if we use i<=sentence.length, it will try to access the index of the sentence which is not available. So, it will show undefined.

//    reverse = sentence[i] + reverse;
    
    
// }
// console.log(reverse);

//Note:method3- shortest way reverse a string

// const sentence = 'I am a student of class ten.';

// const reversed = sentence.split('').reverse().join('');
// console.log(reversed);




