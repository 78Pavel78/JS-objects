
//4.1
function contactNames(obj, lastname){
return(`${obj.firstname} ${lastname}`)
};

//Проверка 4.1
const person = {
    firstname: 'Халид',
    age: 22
    }; 
console.log(contactNames(person, 'Аюбов')); 

//4.2
function correctName(fullName){

if(fullName.fathername === undefined){
    return fullName.firstname;
} else {return ( `${fullName.lastname} ${fullName.firstname} ${fullName.fathername}`); 
    }
}

// Проверка 4.2
const firstPerson = {
    firstname: 'Халид',
    lastname: 'Аюбов',
    fathername: undefined
    };
  
  console.log(correctName(firstPerson)); 
  // в консоле должно быть 'Халид'
  
  const secondPerson = {
    firstname: 'Халид',
    lastname: 'Аюбов',
    fathername: 'Исаевич'
    };

console.log(correctName(secondPerson)); 
// в консоле должно быть 'Аюбов Халид Исаевич'

  