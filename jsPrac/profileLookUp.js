var contacts = [
    {
        "fname":"Shagun",
        "lname":"Attri",
        "number":"9846388829",
        "likes":["Pizza","Coding"]
    },
    {
        "fname":"id10t",
        "lname":"atari",
        "number":"57659813529",
        "likes":["Writing","Coding"]
    },
    {
        "fname":"knownsense",
        "lname":"Alderson",
        "number":"34567388829",
        "likes":["Reading","Coding"]
    },
];

function lookProfile(fname,prop){
    for( var i = 0;i < contacts.length; i++){
        if(contacts[i].fname === fname) {
            return contacts[i][prop] || "PROPERTY NOT FOUND";
        }
    }
    return "NO SUCH CONTACT";
}

var data = lookProfile("id10t","likes");
console.log(data);