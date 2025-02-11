//Note: object er moddhe loop chalanor jonno for in loop use kora hoy

const rahim = {
    name: 'karim',
    age: 20,
    school: 'High School',
    isPassed: true,                                  //note: object er moddhe thaka key-value pair gula ke property bole, must coma dite hobe property likhar por
    isDeveloper: false,
    subject: ['Math', 'Physics', 'Chemistry'],
    'fav places': [ 'andor','kalla', 'bandor', 'bon']
    
}



//note: object er keyname and value loop korar technique

// for (const Keynames in rahim ){
//     console.log(Keynames);
//     console.log(rahim[Keynames]);
// }


//note: object keys method diye value loop kora jay

const keys = Object.keys(rahim)
// console.log(keys)
//note: object jehetu array return korce sejonno amra for loop chalaichi
for(key of keys){
    console.log(key,':',rahim[key])

}
