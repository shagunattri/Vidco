function lookup(val){
    var result = "";

    var look = {
        "alpha":"Shagun",
        "beta":"Attri",
        "gamma":"knownsense",
        "delta":"id10t",
        "echo":"s19"
    };

    result = look[val];

    return result;
}

console.log(lookup("gamma"));