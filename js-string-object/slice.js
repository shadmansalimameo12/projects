// const adress = 'andorkilla';
// const part = adress.slice(0,5);
// console.log(part);
// //NOTE: slice method will take two parameter, first one is starting index and second one is ending index. It will not include the ending index.

//Note: single string divided into multiple parts by using split method.returned value will be an array.
// const sentence = 'I am a student of class ten.';
// console.log(sentence.split(' '));

//Note: multiple string in a single string divided into multiple parts by using split method.returned value will be an array.
// const friendstring   = 'Rahim, Karim, Rahima, Karima, Habib, Babul';
// const friend = friendstring.split(',');
// console.log(friend);


//Note: multiple string in a single array joined into a single string by using join method.returned value will be a string.

// const friend = ['Rahim', 'Karim', 'Rahima', 'Karima', 'Habib', 'Babul'];
// const friendstring = friend.join('/');  
// console.log(friendstring);


//Note: concat method is used to add two or more string together.returned value will be a string.
// const first = 'I am a student of class';
// const second = ' ten.';
// console.log(first.concat(second));


//Note: include method is used to check the presence of a string in another string.returned value will be a boolean.
const school = 'RAJ Uk Uttara Model school';
console.log(school.includes('Uk'))