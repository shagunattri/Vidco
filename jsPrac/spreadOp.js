//use the spread operator(...) to evaluate arrays in place 

//takes array and spreads into individual parts
//used in array,literal,arg,fn
 
const arr1 = ["J","F","M","A","M"];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = "J";
})();
console.log(arr2);