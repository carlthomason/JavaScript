// Using the given array//
var testArr = [6,3,5,1,2,4]

// Warm Up: Print all the values in the array using a for loop

// Challenge 1: Print Values and Array
//Print Values and Sum//
// 1. Print each array value and the sum so far//
// 2. The expected output will be://
// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21

// Challenge 1:

//Answer:
var testArr = [6,3,5,1,2,4];
var sum = 0;
for(var i=0; i<testArr.length; i++){
    sum += testArr[i];
    console.log("Num " +testArr[i]+ ", Sum " +sum)
}
//num 0,1,2,3,4,5
// output:
// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21

// Challenge 2: Value * Position
// Value*Position//
// 1. Multiplu each value in the array by its array psoition//
// 2. The expected output will be://
[0,3,10,3,8,20]

// Challenge 2:
// Answer:
var testArr = [6,3,5,1,2,4];
for(var i=0; i<testArr.length; i++){
    testArr[i] = testArr[i]*i
}
console.log(testArr);

//num 0,1,2,3,4,5
//output: [0,3,10,3,8,20]