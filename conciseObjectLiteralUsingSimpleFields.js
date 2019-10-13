
// const createPerson = (name,age,gender) => {

//     return {
//         name: name,
//         age: age,
//         gernder: gender
//     };
// };

// console.log(createPerson("Shagun",56,"male"));


//using simple fields 

const createPerson1 = (name,age,gender) => ({name,age,gender});

console.log(createPerson1("Shagun",56,"male"));