function check(num){
    if(num < 5){
        return "Tiny";
    }else if(num < 10) {
        return "Small";
    }else if(num < 15) {
        return "Medium";
    }else if(num < 20) {
        return "Large";
    }
    else {
        return "WAYD!!";
}
}

console.log(check(19));