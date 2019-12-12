function local(){
    var my = 5;
    console.log(my);
}

local();

// console.log(my);


var outer = "shirt";
function outfit(){
    var outer = "hoodie";
    return outer;
}
console.log(outfit());
console.log(outer);