
//remove even from array
// const arr = [1,2,3,5,4,6,7,8,9];
// let x = removeeven(arr);
// console.log(x);

// function removeeven(arr){
//     const filtered = arr.filter(element => element % 2 != 0);
//     return filtered;
// }


// Set converter
// const y = [1,1,1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3];
// let a = new Set(y);
// console.log(a);


//find Number
// let arr = [1,2,3,4,5];
// b = findnumber(33)
// console.log(b)


// function findnumber(x){
//     z = arr.indexOf(x);
//     if(z == -1){
//         return "False"
//     }
//     else{
//         return "True"
//     }
// }


//Numbers to letters



const asciiMap = new Map([
[65, "A"], [66, "B"], [67, "C"], [68, "D"], [69, "E"], [70, "F"], [71, "G"], [72, "H"], [73, "I"], [74, "J"],

[75, "K"], [76, "L"], [77, "M"], [78, "N"], [79, "O"], [80, "P"], [81, "Q"], [82, "R"], [83, "S"], [84, "T"],

[85, "U"], [86, "V"], [87, "W"], [88, "X"], [89, "Y"], [90, "Z"],

[97, "a"], [98, "b"], [99, "c"], [100, "d"], [101, "e"], [102, "f"], [103, "g"], [104, "h"], [105, "i"], [106, "j"],

[107, "k"], [108, "l"], [109, "m"], [110, "n"], [111, "o"], [112, "p"], [113, "q"], [114, "r"], [115, "s"], [116, "t"], [117, "u"], [118, "v"], [119, "w"], [120, "x"], [121, "y"], [122, "z"]
]);

let arr = [72, 101, 108, 108, 111, 87, 111, 114, 108, 100]

x = numObj(arr);

console.log(x);

function numObj(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let obj = {};
        obj[arr[i].toString()] = asciiMap.get(arr[i]);
        result.push(obj);
    }

    return result;
}