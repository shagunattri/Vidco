//.padstart()
//padend()


//end with comma and call function with commas at end
'Turtle'.padstart(10);
'Turtle'.padends(10);

const fun = (a,b,c,d,) => {
    console.log(a);
}

fun(1,2,3,4,)

//Object.values
//Object.entries
//object.keys

let obj = {
    username0: 'Santa',
    username1: 'Clause',
    username2: 'Brian',
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username','');
})