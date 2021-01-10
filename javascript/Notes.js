// Javascript is a programming language.

// Variables and Data Types
// Variables
    // to create a variable, we use the keyword var and then give it any name we like

//console.log: is a function that lets use take a peek at what the code is doing for us
// If we want to see what the value of a variable is, we can add a console.log(varName) to our code so that we can see what its value is.

// Data Types
    // Most common data types in Javascript: string, number, undefined, null, and boolean
        // Strings: are simply characters that are grouped together and surrounded by quotation marks
        // Strings can have any amount of characters inside of them, and can hold numbers and special characters
        var myStringVariable = "My name is Jeff!";  
        var password = "Password1234!"  
        console.log(myStringVariable);    //My name is Jeff!
        
        // Numbers: are exactly what you think they are!
        // Whole numbers and floating point numbers (decimals) are all considered 'numbers'
        // You can perform mathematical operations using variables when numbers are assigned to them.
        var myNum = 5;    
        var myOtherNum = 10;    
        console.log(myNum + myOtherNum);    //15
    
        // Undefined: A variable that has not yet been assigned a value takes on the value of undefined.
        var myVar;    
        console.log(myVar);    //undefined would be printed to your console!

        // Null: Null and undefined are sometimes incorrectly used interchangeably (they are very different)
        // Null is a value that is explicity assigned and often used when wanting to explicity state that nothing is currently being held in this variable

        // Boolean: is a very fancy way of saying true or false!

// Math Operations
    // We can use any basic mathematics operations: addition(+), subtraction(-), division(/), and multiplication(*)
    // Modulus and Removing decimal places
        // Modulus: also known as calculating the remainder (basically, we can see if 2 numbers were to be divided, if there would be a remainder)
        console.log(5 % 2)   //This would print 1; Not evenly divisible by 2 since there is a remainder of 1
        console.log(6 % 2)   //This would print 0; Evenly divisible since remainder is 0
        console.log(8 % 3)   //This would print 2; Not evenly divisible by 3 since there is a remainder of 2
        // Especially useful to see if some number is divisible by another

        // Removing decimal places
        // Few ways to remove the decimal and get back to whole integer
            // Math.round(num): rounds a number; if decimal is 0.5 or up it will round up to the next number; if number is 0.49 or below it will round down
            var num1 = Math.round(2.5)   //num1 is 3
            var num2 = Math.round(2.4)   //num2 is 2
            var num3 = Math.round(-2.9)  //num3 is -3
            var num4 = Math.round(-2.1)  //num4 is -2
            
            // Math.floor(num): always rounds a number down
            var num1 = Math.floor(2.5)   //num1 is 2
            var num2 = Math.floor(2.4)   //num2 is 2
            var num3 = Math.floor(-2.9)  //num3 is -3
            var num4 = Math.floor(-2.1)  //num4 is -3

            // Math.cell(num): always rounds a number up
            var num1 = Math.ceil(2.5)   //num1 is 3
            var num2 = Math.ceil(2.4)   //num2 is 3
            var num3 = Math.ceil(-2.9)  //num3 is -2
            var num4 = Math.ceil(-2.1)  //num4 is -2

            // Math.trunc(num): always truncates the number, chopping off the decimal regardless of what the number is
            var num1 = Math.trunc(2.5)   //num1 is 2
            var num2 = Math.trunc(2.4)   //num2 is 2
            var num3 = Math.trunc(-2.9)  //num3 is -2
            var num4 = Math.trunc(-2.1)  //num4 is -2

// Conditionals
    // A code that we only want to execute under certain conditions (conditional statement)
    if (condition) {    // what to do if condition is true
    }
    else if (2nd condition) {        // can have 0 to many of these statements    
        // what to do if 2nd condition is true
    }
    else {                           // can have 0 or 1 of these statements    
        // what to do if none of the previous conditions are met
    }
    // Note that in an if/else if/else chain, when one conditions evaluate as true, our code won't check any of the other conditions until it hits an 'if' again
    // Examples
    var x = 25;
    if (x > 50) {    
        console.log("bigger than 50");
    }
    else {    
        console.log("smaller than 50");
    }
    // because x is not greater than 50, the second print statement, "smaller than 50", is the only line that will execute
    var x = 75;
    if (x > 100) {    
        console.log("bigger than 100");
    }
    else if (x > 50) {    
        console.log("bigger than 50");
    }
    else if(x > 25) {
        console.log("bigger than 25");
    }
    else {    
        console.log("small number");
    }
    // because the first statement is not true, but the second is it will print "bigger than 50" to our console.  However, it won't even try to check our else if(x > 25) or else statements because it has already found something in the chain that is true.

                    // Comparison and Logic Operators
        // Conditional statements evaluate to boolean values (true or flase); Ways you can compare the two values
    // Operator	      Description	                    Examples
    //    ==	         equal	               1 == 2 => false; 1 == 1 => true
    //    !=	        not equal	           1 != 2 => true; 1 != 1 => false
    //    >	           greater than	           1 > 2 => false; 2 > 1 => true
    //    <	            less than	           1 < 2 => true; 1 < 2 => false
    //    >=	   greater than or equal to	   1 >= 2 => false; 2 >= 2 => true
    //    <=	     less than or equal to	   1 <= 2 => true; 2 <= 2 => true


// For Loop and While Loops
// 3 Key Things to run a loop: Where to start, When to stop looping, and How to change our variable each time
    // For Loops
        // For Loops: usually used when you want to repeat a process a known number of times
        for(var num = 0; num <= 5; num++){
            console.log(num);
        }
        // This code also counts up to 5, but the code gets executed in this order
        // 1. The first piece, var num = 0, gets executed just once
        // 2. The second piece, num <=5, gets evaluated. if true, move onto step 3. If false, jump to step 6
        // 3. Execute whatever is inside the for loop's code block(in our case: console.log(num));
        // 4. Execute the third piece, num++
        // 5. Go Back to Step 2
        // 6. Continue executing the code that comes after the for loop

    // While Loops
        // While Loops: usually used when you want to repeat a process until some condition is met
        // A while loop has a condition that it check if it has met each time it loops 
        // Until that condition is met it will continue running our code within the loop
        while (condition) {        
                // what to keep doing as long as the condition is true
            }   
            // we get to this line when the condition in the loop is false
        
        // This condition will be our stopping point, or what we want to go until we reach
        // Our starting point is declared before we enter the loop, and we need to change our variable each time within our loop to make sure we aren't stuck in a never ending cycle.
        // If we were missing any one of our 3 key components, our loop would no longer function
        // In our counting example, we want to keep printing to the console while the number is less than or equal to 5
        var num = 0;    // start a variable at 0
        while (num <= 5) {        
            console.log(num);    // print the current value of num        
            num=num+1;       // increment num by 1
        }

// Shorthand Notation
    // One really common shorthand is for incrementing(adding to) or decrementing(subtracting from) a variable
    // 2 Ways to Decrement By Any Number
    // these 2 statements are equivalent!
        num = num - 2
        num -= 2 
    
    // 2 Ways to Increment By Any Number
    // these 2 statements are equivalent!
        num = num + 5
        num += 5

    // 3 Ways to Decrement By 1
    // these 3 statements are equivalent!
        num = num - 1
        num -= 1
        num--

    // 3 Ways ro Increment By 1
    // these 3 statements are equivalent!
        num = num + 1
        num += 1
        num++