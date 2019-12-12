function sil(arr,num){
    arr.push(num);
    return arr.shift();
}

var arr = [0,1,2,3,4,5,6];

console.log("Before: " + JSON.stringify(arr));
console.log(sil(arr,7));
console.log("After: " + JSON.stringify(arr));