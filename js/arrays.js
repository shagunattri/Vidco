const array = [1,2,10,16];

const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log('forEach',double);


//map,filter,reduce

const mapArray = array.map((num) => {
    return num * 2;
});

console.log('map',mapArray);

//filter 
const filterArray = array.filter(num => num === 5);
console.log('filter',filterArray);

//reduce -powerful can perform map and filtering
//takes an accumulator

const reduceArray = array.reduce((acc,num) => {
    return acc + num;
}, 0);

console.log('reduce',reduceArray);