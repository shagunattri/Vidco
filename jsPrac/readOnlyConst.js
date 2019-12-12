// features of let but read only

function print(str){
    "use strict";

    const SENTENCE = str + " is cool";

    for (let i = 0;i < 1; i++){
        console.log(SENTENCE);
    }
}

print("Coding");
