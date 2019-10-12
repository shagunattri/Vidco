var obj = {
    name: "Shagun",
    lname: "attri",
    nick: "knownsense",
};

function checkProp(objprop){
    if(obj.hasOwnProperty(objprop)){
        return obj[objprop];
    }else {
        return "Not Found";
    }
}
console.log(checkProp("nick"));