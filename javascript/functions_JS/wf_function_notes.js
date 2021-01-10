//// Notes from Web Fundamentals Javascript - Functions /////

// Functions: are able to write a block of code that will only be executed when we call on it

function name_of_function(){
    // code to be executed
}

// Original Counter Code into a Function
function counter() {    
        for(var num = 0; num <= 5; num++){
            console.log(num);
        }
    }
// Counter code will not run since it has not been called on!
// To call on a function or invoke a function, we must call it by its name and add ()
name_of_function();

// Example of a complete function that is ready to be called
function counter() {    
        for (var num = 0; num <= 5; num++) {        
            console.log(num);    
        }
    }
    counter();    // run the function
    counter();    // run the function again

// Now that the function is written, we can call on it as many times that we like!!!!

// Adding parameters

    // We indicate that a function requires input by specifying parameters in the parentheses next to the function's name
    // Then, when we call on the function, we pass in arguments, or actual values to be used in the function

    function counter(startNum) {    //The function is expecting some PARAMETER in order to run
            for (var num = startNum ; num >= 0 ; num--) {        
                console.log(num);    
            }
        }
        counter(6);    // Passing in an ARGUMENT of 6, the console would display: 6, 5, 4, 3, 2, 1, 0
        counter(3);    // Passing in an ARGUMENT of 3, the console would display: 3, 2, 1, 0

// return vs console.log

// console.log: allows developers to see what's going ong. Besides printing something to the screen, doesn't really do anything.

// return: true output of the function; serves to end the function immediately

// Example of console.log only ( example: ice cream man saying he has ice cream)
function createArray(num) {        
        var newArray = [];       
        for (var i = 0; i <= num; i++) {                
            newArray.push(i);        
        }
    }
    createArray(5);
    //The newArray only exists inside of the function.  Out here it no longer exists!
    // Once the console.log executes the reference of the array is lost and can not be used again

// Example of return:  (example: icre cream man actually handing you the cone)
function createArray(num) {        
        var newArray = [];        
        for (var i = 0; i <= num; i++) {                
            newArray.push(i);        
        }        
        return newArray;        // added the return statement
    }
    var y = createArray(5);        // now y is the variable that is calling on createArray

// Examples
    function name_of_function(){
        // code to be executed
        console.log("Function was executed..");
    } // function never called so no return
    
    console.log("This code is not in a function.");
    
    function whatever(){
        console.log("This is a function.");
    }
// Function (will run the code):
    whatever();
    whatever();
    whatever();
// Output: This is a function. This is a function. This is a function.
    
// Function call (will run the code):
    
function printArrayVals(){
    var array = [2,4,6,8]
        for(var i=0; i<Array.length; i++){
            console.log(arr[i]);
    }
}
    
printArrayVals();
console.log("Hello")
printArrayVals();

// More complicated
// Parameter = input data that must be given for the function to run
    function printArrayVals(input_data){
        var array = [2,4,6,8]
        for(var i=0; i<Array.length; i++){
            console.log(arr[i]);
        }
    }
    
printArrayVals();
    

