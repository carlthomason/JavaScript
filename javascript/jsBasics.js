// This is a comment

// Basic Puzzle Pieces
// -----------------
// Data Types
// Numbers like 42
// Strings like "Hello" or '42' or 'Good morning!'
// Booleans like true or false

// Console:
// Place for us to have any language give us feedback
// Like a little notes panel
// console.log(whatever_we_want_to_log);

// something.action(stuff);
// something.action();

console.log("Good morning");
console.log(42);

// Count to 5!
// Step 1: How to Hard code it
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// What if we wanted to go to 1000?
// Hard coding would be too difficult
// Let's use loops and variables!

// A variable is a placeholder or a space in memory
var num = 1;
// Hey JS, I want you to remember the number 1
// The code name for tha number is "num"
// Any time I say "num" I want you to think of 1
console.log(num+50);
//           1+50

// Count to 5 with the num variable
var num = 1;
console.log(num);
// think of = like a recording button
// space_in_memory = old_value + whatever;
num = num +1;
console.log(num);

num = num +1;
console.log(num);

num = num +1;
console.log(num);

num = num +1;
console.log(num);
// equals 1,2,3,4,5

// Any time you have a repeating code, use a loop!
// Basic loop setup
// 1: Starts a space in memory at 0 called loop tracker
// 2. Sets a max value for the loop or a limit (looping condtion)
// 3. Add 1 to banana every loop

// Example:
for(var banana=0; banana<=5; banana++){
    console.log(banana);
}
// Step 1: var banana = 0
// Step 2: banana <= 5
// Step 3: console.log(banana);
// Step 4: banana++
// Step 5: var banana = 1
// Step 6: banana <= 5
// Step 7: console.log(banana);
// Step 8: banana++
// Step 9: var banana = 2
// Step 10: banana <= 5
// Step 11: console.log(banana);
// Step 12: banana++
// Step 13: var banana = 3
// Step 14: banana <= 5
// Step 15: console.log(banana);
// Step 16: banana++
// Step 17: var banana = 4
// Step 18: banana <= 5
// Step 19: console.log(banana);
// Step 20: banana++
// Step 21: var banana = 5
// Step 22: banana <= 5
// Step 23: console.log(banana);
// Step 24: banana++
// Step 25: var banana = 6