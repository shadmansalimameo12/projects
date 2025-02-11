

 // Note:when we need to compare two strings we need to convert them in same case, either lower case or upper case.That's why we need to convert the case of the string.

const school = 'RAJ Uk Uttara Model school';

console.log(school.toLowerCase());
console.log(school.toUpperCase());  


//Note: if there is white space between the string, we can remove it by using trim() method.

const school1 = '    RAJ Uk Uttara Model school    ';
const school2 = 'RAJ Uk Uttara Model school';

if(school1.trim() == school2.trim()){
    console.log('They are same');
}
else{
    console.log('They are not same');
}
    

