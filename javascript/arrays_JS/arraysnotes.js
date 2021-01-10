// Arrays

// Collection of Data
    var usersFirstName = "Dwight";    
    var usersLastName = "Schrute";    
    var usersEmail = "beetsbears@battlestar.com";

// Array is a data structure that keeps things organized
var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];

// Array - Add
// to add to an array using the push method, this will add a value to the end of the array
    var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];    
    user.push("jello");    
    console.log(user);    // ["Dwight", "Schrute", "beetsbears@battlestar.com", "jello"]

// Array - Remove
// To remove a value form the end of the array, we use the pop method
// Pop can only remove the end item
    var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];    
    user.pop();    
    console.log(user);    // ["Dwight", "Schrute"]

// Array - Access/Update
// Arrays are indexed; meaning that every item in the array is in a indeed position, starting with 0
// To access or update values in an array, we access the name of the array and the item we want from within it
    var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];    
    console.log(user[0]);    // reading the value -- OUTPUT: Dwight    
    user[1] = "Martin";    // updating the value    
    console.log(user);    // ["Dwight", "Martin", "beetsbears@battlestar.com"]

// Array - Length
// Length property tells us how many values are contained in the array
    var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];    
    console.log(user.length);    // 3    
    user.pop();    
    console.log(user.length);    // 2

// An array is a collection of any other kind of data

var some_array = [2,4,6,8];

// index nums:    0,1,2,3
// This arrays has 4 items in it (length)
console.log(some_array.length)

// What is we just wanted to see the 3rd item?
console.log(some_array[2]);

// What if we want to add more numbers to the array?
// Push! Will always add to the end of the array
some_array.push(10);

// What if we want to remove numbers from the array?
// Pop! will remove the number at the end of the array.
some_array.pop();

// Change 1 value in the array:
some_array[1] = "Hello"
console.log(some-array);

some_array[2] = some_array[2] +10;
console.log(some_array);  16

// Arrays + Loops //
// Using these ideas of index numbers and array length, we can actually use a for loop to iterate through an array and look at every element.
// We can set our loop variable to start at 0 (the first index in an array!). 
// We stop when we reach the length of the array. 
// Each time the loop executes, we now can access elements in the array by that index.
var arr = [2,4,6,8,10];
for (var i = 0; i < arr.length; i++) {        
    console.log(i);             // prints the index       
    console.log(arr[i]);        // prints the array value at that index
}
// Note: Notice that the end condition of our loop uses < instead of <=. Why is this? 
// Because arrays start at index 0, the last index in the array will actually be one less than the length of the array. 
// Therefore, we want to stop our loop from incrementing one value before we reach the length of the arra