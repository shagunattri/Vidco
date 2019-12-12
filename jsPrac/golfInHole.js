var name = ["hole-in-one!","eagle","birdie","par","bogey","double bogey","go home"];

function golf(par,stroke){
    if(stroke == 1){
        return name[0];
    }else if(stroke <= par -2){
        return name[1];
    }else if(stroke == par - 1){
        return name[2];
    }else if(stroke == par){
        return name[3];
    }else if(stroke == par + 1){
        return name[4];
    }else if(stroke == par + 2){
        return name[5];
    }else if(stroke == par + 3){
        return name[6];
    }else {
        return "Change Input!!";
    }
}

console.log(golf(5,8));