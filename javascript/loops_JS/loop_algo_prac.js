// Warmup!!!!
// Print numbers from 1-5
// Print out all the numbers from 1 to 5
// The expected output will be 1,2,3,4,5

// Pseducode: write out the algorithmic steps in plain English
// I need a place to keep track of what number I'm on (variable)
// I need to start the number at 1
// I need to go up by 1 number each step to continue counting
// I need to stop if I go over 5
// (Sounds like a loop!)

// Your Code Here
// Warmup
for(var i=1; i<=5; i++) {
    console.log(i);
}


// Challenge 1:
// Print odds 1-20
// Print out all odd numbers from 1-20
// The expected output will be 1,3,5,7,9,11,13,15,17,19
// This is the puzzle piece for checking for odd numbers:

// Your Code Here
// Challenge 1:
for(vari=1; i<=20; i++){
    if(i%2 == 1){
        console.log(i);
    }
}

// or

for(var i=1; i<=19; i+2){
    console.log(i);
}


// Challenge 2:
// Sum and Print 1-5
// Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
// The expected output will be: 
// Num: 1, Sum: 1, 
// Num: 2, Sum: 3, 
// Num: 3, Sum: 6, 
// Num: 4, Sum: 10, 
// Num: 5, Sum: 15

// Your Code Here
// Challenge 2: 
var sum =0
for(var num=1; num<=5; num++){
    console.log(num);
    sum=sum+num;
    console.log(sum);
    }

// or

console.log('Num: ${num}, Sum: ${sum}');


