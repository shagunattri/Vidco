// var spaceShuttle = function(targerPlanet) {
//     this.targerPlanet = targerPlanet;
// }
// var zeus = new spaceShuttle('Jupiter');

// console.log(zeus.targerPlanet);


class spaceShuttle {
    constructor(targerPlanet) {
    this.targerPlanet = targerPlanet;
}
}
var zeus = new spaceShuttle('Jupiter');

console.log(zeus.targerPlanet);


function makeClass(){
    class veggies {
        constructor(name){
            this.name = name;
        }
    }
    return veggies;
}
const veggies = makeClass();
const carrot = new veggies('carrot');
console.log(carrot.name);