// Challenge 1.  Greeting
function greeting(){
        return "Hello";
        console.log("World");
    }
    var word = greeting();
    console.log(word);

// console: Hello

// Challenge 2. Add two nums
    function add(num1, num2){
            console.log("Summing Numbers!");
            console.log("num1 is: "," + num1");
            console.log("num2 is: " + num2);
            var sum = num1 + num2;
            return sum;
        }
        var result1 = add(3,5);
        var result2 = add(4,7);
        console.log(result1);
        console.log(result2);

// Output: 8,11


// Challenge 3. High Five - Every five number says High Five!
function highFive(num){
for(var i=0; i<num; i++){
    if(i == 5){
    console.log("High Five!");
    }
    else{
    console.log(i);
    }
 }
}
// Output: 0,1,2,3,4,"High Five!"
