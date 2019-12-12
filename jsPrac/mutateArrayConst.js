const arr = [1,2,3];

function editPlace() {
    "use strict";

    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;
}

editPlace();

console.log(arr);