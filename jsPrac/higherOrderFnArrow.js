const arr = [4,5.6,-9.76,3.14,42,6,8.34,-2];

const squareList = (array) => {
    const squareInt = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squareInt;
}

const sqint = squareList(arr);
console.log(sqint);