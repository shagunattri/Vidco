function sayHello() {
	console.log("Hell0");
}


sayHello();

var sayBye = function() {
    console.log("Bye");
}

sayBye();


function sing() {
    console.log("AHHHHHHHHHHHH");
    console.log("TEEEEEEEEEEEEEEE");
}
sing();


function multiply(a,b) { 
    if(a > 10 || b > 10) {
    return "That's too hard";
} else {
    return console.log(a*b);
}
}
multiply(2,3);