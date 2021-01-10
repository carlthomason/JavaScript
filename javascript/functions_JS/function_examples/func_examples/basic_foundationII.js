// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function makeItBig(arr) {
    var arr = [];
    for (var i=0; i < arr.length; i++){
        if (arr[i] > 0) {
            arr[i] = 'big';
        }
    }

    return arr;
}

makeItBig();


// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr){
    var arr = [];
    var high = arr[0];
    var low = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr [i] > high) {
            high = arr[i];
        }

        if (arr[i] < low) {
            low = arr[i];
        }
    }
    console.log(low);
    return high;
}

printLowReturnHigh();

// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function printOneReturnAnother(arr) {
    var arr = [];
    var secondToLast = arr[arr.length - 2];
    for (var i=0; i < arr.length; i++){
        if (arr[i] % 2 != 0) {
            firstOdd = arr[i];
        }
    }
    console.log(secondToLast);
    return firstOdd;
}

printOneReturnAnother();

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function double(arr) {
    var arr = [];
    for (var i =0; i < arr.length; i++) {
        arr [i] = arr [i *2];
    }
    return arr;
}

double();

// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr) {
    var arr = [];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count += 1;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}

countPositives();

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function evensAndOdds(arr) {
    var arr = [];
    var odds = 0;
    var evens = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] == 0){
        } else if (arr[i] % 2 != 0) {
            odds += 1;
            if (odds == 3){
                console.log("That's odd!");
                odds = 0;
                evens = 0;
            }
        } else {
            evens += 1;
            if (evens == 3){
                console.log("Even more so!");
                evens = 0;
                odds = 0;
            }
        }
    }
}

evensAndOdds();

// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function incrementSeconds(arr) {
    var arr = [1,3,5,7];
    for (var i =0; i < arr.length; i++) {
        if (i % 2 != 0) {
            arr [i] = arr[i] + 1;
        }
        console.log(arr [i]);
    }
    return arr;
}

incrementSeconds();

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLengths(arr) {
    var newarr = [];
    var arr = [1,2,3,4,5,6];
    for (var i = 0; i < arr.length; i++) {
        newarr[i] = arr[i].length;
    }
    for (var y = 1, x = 0; y < arr.length; y++, x++) {
        arr[y] = newarr[x];
    }
    return arr;
}

previousLengths();

// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSevenToMost(){
    var newarr = [];
    var arr = [];
    newarr [0] = arr[0];
    for(var i = 1; i < arr.length; i++) {
        newarr[i] = arr[i] + 7;
    }
    return newarr;
}

addSevenToMost()

// work on it// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArray(arr){
    var temp = arr[0];
    var arr = []
    for (var i = 0; x = (arr.length - 1); i < arr.length; i++; x--) {
        temp = arr[i];
        arr[i] = arr[x];
        arr[x] = temp;
    }
    return arr;
}

reverseArray();

// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function outlookNegative(arr) {
    var newarr = [];
    var arr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr[i] = -Math.abs(arr[i]);
    }
    return newarr;
}

outlookNegative();

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function alwaysHungry(arr) {
    var counter = 0;
    var arr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'food') {
            console.log('yummy');
            counter += 1;
        }
    }
    if (counter == 0) {
        console.log("I'm hungry");
    }
    return;
}

alwaysHungry();

// work on it // Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time

function swapTowardTheCenter(arr){
    var temp = arr[]
    for (var i = 0, x = (arr.length-1); i < x; i++, x--) {
        if (i == 0 || i % 2 == 0) {
            temp = arr[i];
            console.log(temp);
            arr[i] = arr[x]; 

            arr [x] = temp;
            console.log(arr);
        }
    }
    return arr;
}

swapTowardTheCenter();

// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9]. 

function scaleArray(arr, y){
    var arr = [1,2,3,4];
    y = (2);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] *y;
    }
    return arr;
}

scaleArray();