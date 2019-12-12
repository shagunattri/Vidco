


var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study js",
    "eat healthy",
];

var todosImp = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study js!",
    "eat healthy!",
];

var todosLength = todos.length; 
for( var i = 0;i < todosLength; i++) {
    console.log(todos[i],i);
}


function logtodos(todo,i) {
    console.log(todo,i);
}

todosImp.forEach(logtodos);






// todos.forEach(function(todo,i) {
//     console.log(todo,i);
// })

// var counter = 10;
// while(counter > 0) {
//     console.log(counter);
//     counter--;
// }

// var count = 10;

// do{
//     console.log(count);
//     count--;
// } while (count > 0);