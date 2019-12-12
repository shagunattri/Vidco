var vox = {x:0,y:1,z:2};

const {
    x:a,
    y:b,
    z:c,
} = vox;

const avgtemp = {
    today:32,
    tomorrow:29
};

function tempTom(avgTemp) {
    "use strict";

    const { tomorrow: daytemp } = avgTemp;

    return daytemp;
}

console.log(tempTom(avgtemp));

//destructuring assignment with nested objects
const forecast = {
    today: {min:19, max:29 },
    tomorrow: { min:21, max:33},
};

function maxTom(cast) {
    "use strict";

    const { tomorrow: { max:tempMax}} = cast;

    return tempMax;
}

console.log(maxTom(forecast));

 //using destructuring assignment to assign variables from arrays

 const [z,x, ,y] = [1,2,3,4,5,];
 console.log(z,x,y);

 let an = 8,bm = 6;
 (() => {
     "use strict";
     [an,bm] = [bm,an]
 }) ();
 console.log(an);
 console.log(bm);

 //using destruction assignmet with the rest operator
  
 const source = [1,2,3,4,5,6,7,8,9];
 function removeTwo(list) {

    const [ , , ...arr] = list;

    return arr;
 }

 const arr = removeTwo(source);
 console.log(source);
 console.log(arr);


 //using destruction assignment to pass an object as a functions parameter
const stats = {
    max: 12.99,
    standardDeviation: 4.35,
    median: 34.54,
    mode: 23.48,
    min: -37.21,
    average: 35.84,
};

const half = (function () {
    return function half({ //destruction  by using only specific elements of obj instead of the whole object  as done in API requests
        max,min 
    }) {
        return (max + min) / 2.0;
    };
}) ();

console.log(stats);
console.log(half(stats));