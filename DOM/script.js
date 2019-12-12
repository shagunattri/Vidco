// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseenter",function(){
//     console.log("Click!!!");
// })


var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click",function() {
    if(input.value.length > 0){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
    // console.log("Click is working!!");
})

input.addEventListener("keypress",function(event) {
    if(input.value.length > 0 && event.keyCode === 13){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
    // console.log("Click is working!!");
})