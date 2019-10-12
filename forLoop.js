// var array = [];
// for(var i = 10;i>=1;i-=2){
//     array.push(i);
// }
// console.log(array); 



//iteratea array through loops
// var arr = [1,2,3,4,5,6,7,8,9,10];
// var init = 0;
// for(var i =0;i < arr.length;i++){
//     init += arr[i];
// }
// console.log(init);

function mul(arr) {
    var product = 1;
    for (var i = 0;i < arr.length;i++){
        for(var j =0;j < arr[i].length;j++){
            product *= arr[i][j];
        }
    }
    return product;
}
var product = mul([[1,2],[3,4,5],[6,7],[8,9,]]);
console.log(product);