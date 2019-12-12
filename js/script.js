var database = [
    {
        username: "shagun",
        password: "secret",
    },
    {
        username: "alderson",
        password: "123",
    },
    {
        username: "attri",
        password: "777",
    },
];

var newsfeed = [
    {
        username: "Id10t",
        timeline: "Happy! :)",
    },
    {
        username: "alderson",
        timeline: "Noice :}",
    },
    {
        username: "attri",
        timeline: "how ya doin' i am blinded by the ligths!",
    },

];
 


















var userNamePrompt = prompt("What's your UserName: ");
var passwordPrompt = prompt("What's your Password: ");


function signIn(user,pass) {
    if(user === database[0].username && pass === database[0].password) {

        console.log(newsfeed);
    } else {
        alert("Sorry,Invalid Details!!");
    }
}

signIn(userNamePrompt,passwordPrompt);