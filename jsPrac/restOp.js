const sum = (function() {
    return function sum(...arg) {
        //const arg =[x,y,z];
        return arg.reduce((a,b) => a+b,0);
    };
})();
console.log(sum(1,2,4,3,10));