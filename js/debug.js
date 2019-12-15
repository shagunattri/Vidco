const flatend = [[0,1],[2,3],[4,5]].reduce(
    (accumulator,array) => {
        console.log('array',array);
        console.log('accumulator',accumulator);
        return accumulator.concat(array)
    },[]);  


    //timeout

    console.log('1');
    setTimeout(() => {
        console.log('2');
    },2000)
    console.log('3');


    //Call Stack
    //Web API
    //CallBack Queue
    //event Loop