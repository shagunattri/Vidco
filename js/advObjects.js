var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};


//context vs scope 
const object4 = {
    a: function() {
        console.log(this);
    }
}

//isntantiation
class Player {
    constructor(name,type,age) {
        console.log('Player',this);
        this.name = name;
        this.type = type;
        this.age = age;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type} and ${this.age} years old`);
    }
}

class Wizard extends Player {
    constructor(name,type,age){
        super(name,type,age) 
            console.log('Wizard',this);
        }
        Player() {
            console.log(`Weeeiii I'm a ${this.type}`);
        }
    }

    const wiz1 = new Wizard('Shagun','Healer','18');
    const wiz2 = new Wizard('Attri','Flank','19');
