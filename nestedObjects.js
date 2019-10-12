var storage = {
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger seat": "crumbs",
        },
        "outside":{
            "trunk":"jack",
        }
    }
};

var gloveBoxContents = storage.car.inside["glove box"];

console.log(gloveBoxContents);