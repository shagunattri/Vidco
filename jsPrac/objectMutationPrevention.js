
//uses Object.freeze()s

function objFreeze() {
    "use strict";
    const PI = {
        PIN: 3.14,
    };

    //object freezing
    Object.freeze(PI);

    try{
        PI.PIN =  99;
    } catch( ex ) {
        console.log(ex);
    }
    return PI;
}

const PIn = objFreeze();

console.log(PIn);
