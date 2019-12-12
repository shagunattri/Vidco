var collection = {
    "123": {
        "album":"kdljlakf",
        "artist":"bon avi",
        "tracks":[
            "let it rock",
            "you give love a bad name"
        ]
    },
    "12335": {
        "album":"kdljlakf",
        "artist":"bon avi",
        "tracks":[
            "1999",
            "bad name" 
        ]
},
"1245": {
    "artist":"bon avi",
    "tracks":[ ], 
},
"5439":{
    "album":"Abba Gold"
}
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function recordUpdate(id,prop,value){
    if(value === ""){
        delete collection[id][prop];
    }else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
        }else {
        collection[id][prop] = value;
    }

    return collection;
}
 
recordUpdate(12335,"artist","shagun");
recordUpdate(12335,"name","ID10t");
console.log(recordUpdate(5439,"artist","ABBA"));

 

