function randomRange(min,max){
    
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var range = randomRange(10,69);

console.log(range);