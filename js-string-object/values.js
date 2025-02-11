const rahim = {
    name: 'karim',
    age: 20,
    school: 'High School',
    isPassed: true,                                  //note: object er moddhe thaka key-value pair gula ke property bole, must coma dite hobe property likhar por
    isDeveloper: false,
    subject: ['Math', 'Physics', 'Chemistry'],
    'fav places': [ 'andor','kalla', 'bandor', 'bon']
    
}


//note: evabe amra object er keynames er values ber korte parbo.

const values = Object.values(rahim);
console.log(values)