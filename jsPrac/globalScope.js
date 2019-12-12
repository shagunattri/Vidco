
const global = 10;

function f1(){
 var oops = 99;

}

function f2(){
    var output;
    var out;
    if(typeof global != "undefined"){
        output = "global " + global;
    }
    if(typeof oops != "undefined"){
        output = "oops " + oops; 
    }
    //console.log("\n");
    console.log(output);
}

f1();
//console.log("\n");
f2();

 