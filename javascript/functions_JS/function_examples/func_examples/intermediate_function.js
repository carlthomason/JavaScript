// 1. Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function sigma(n) {
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum += i;
    }
    retun sum;
}

sigma();

// 2. Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial(n) {
    var product = 1;
    for (var i = 1; i <= n; i++) {
        console.log("i is" + 1);
        product *= i;
        console.log("product is" + product);
    }
    return product;
}

factorial();

// Work On It // 3. Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.


// 4. Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function secondToLast(arr) {
    if (arr.length <= 2) {
        return null;
    }
    return arr[arr.length - 2];
}

secondToLast();

// 5. Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function ninthToLast(arr, y) {
    if (arr.length <= y) {
        return null;
    }
    return arr[arr.length - y];
}

ninthToLast();

// 6. Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function secondLargest(arr) {
    var result = arr[0];
    var temp = 0;
    var done = false;
    
    if (arr.length < 2){
        return null;
    }
    while (done == false) {
        done = true;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i-1] > arr[i]) {
                done = false;
                temp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = temp
            }
        }
    }
    result = arr[arr.length - 2];
    return result;
}

secondLargest();

// 7. Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function doubleTrouble(arr){
    var newarr = [];
    var n = 0;
    for (var i = 0; i < arr.length; i++) {
        while (n < 2) {
            newarr.push(arr[i]);
            n++;
        }
        n = 0;
    }
    return newarr;
}

doubleTrouble();
