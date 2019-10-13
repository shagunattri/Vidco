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