var user1: ["Anne", "ajurack@codingdojo.com"];

var user2: ["Adrien", "Dion", "adion@codingdojo.com"];

// The above arrays do not have the email in the same position

// objects get rid of that problem!!

var userObj1 = {"name" : "Anne", "email" : "ajurack@codingdojo.com" }

var userObj2 = {"name" : "Adrien", "lname" : "Dion", "email" : "adion@codingdojo.com"}

// Objects don't use index number
// Objects use the key names as the index values:
// This is a bracket lookup"
console.log( userObj1["email"])
// This is dot notation:
console.log(userObj1.email)
// Theses essentially do the same thing: look for the value at that key location

// To make objects more readable, separate key/value pairs onto their own lines
var userObj1 = {
    "name" : "Anne",
    "email" : "ajurack@codingdojo.com"
}

var userObj2 = {
    "name" : " Adrien",
    "lname" : "Dion",
    "email" : "adion@codingdojo.com"
}

// You can add key/value pairs like so:
console.log(userObj1)
userObj1["lname"] = "Jurack"
console.log(userObj1)

// for in loop!!
for(var whatever in userObj1){
    console.log(whatever)
}

// var is key_name
// here is the puzzle piece to loop through and find all the key names in an object:
// You can use those key names to find the value
for(var key_name in userObj2){
    console.log(key_name)
    console.log(userObj1[key_name])
}

// What if we pulled data out of a database?
// It might come back as an ARRAY of objects

var database_pull = [{}, {}, {}]
//                    0,  1,  2

var database_pull = [{"name" : "Anne"}, {"name" : "Bob"}, {"name" : "Adrian"}]

console.log(database_pull) // This is an entire array with 3 things in it
console.log(database_pull[0]) // This is an object with the key name in it

// pursing
console.log(database_pull[0].name) // This is the String that was stored as a value at the key called name in the object
// So here is the loop to get all the NAMES from all the OBJECTS inside the array:
for(var i = 0; i < database_pull.length; i++){
    console.log(database_pull[i].name)
    // or
    console.log(database_pull[i]["name"])
    // they both do the same thing
}

// for in loop finds collection of data
for(var i in database_pull){
    console.log(i)
}

// Example of Object
var dojo = {};                                 // creates an empty object
dojo = {
  name: 'Coding Dojo',                         // property can store a string
  number_of_students: 25,                      // property can store a number
  instructors: ['Andrew', 'Michael', 'Jay'],   // property can store arrays
  location: {                                  // property can even store another object!
    city: 'San Jose',
    state: 'CA',
    zipcode: 95112
  }
}                                              // access object properties with dot (.) notation
console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
console.log(dojo["name"]);                     // or bracket [] notation (note: specify key in quotes)
// After creating a new object we might need to add a new key with a new value. 
// Not only that, we might need to update the information our Object holds
// Let's add a new key to our Dojo Object called snacks where we have an Array of snacks we have at our Dojo.
dojo.snacks = ['Fig Bars', 'Bagels', 'Popcorn', 'Apples'];
// Now that we have added a new key with a value to our object, let's update some of the previous keys with new values.
// Each time we use the same key, we reassign the value for that key
dojo.number_of_students = 40;         // we can reassign any of the properties
dojo.location.city = "Bellevue";
dojo.location.state = "Washington";
dojo.location.zipcode = "unknown";
// If we were to console.log our object this is what we would see:
{
    name: 'Coding Dojo',                        
    number_of_students: 40,                     
    instructors: ['Andrew', 'Michael', 'Jay'],   
    location: {                                  
      city: 'Bellevue',
      state: 'Washington',
      zipcode: 'unknown'
    },
    snacks: ['Fig Bars', 'Bagels', 'Popcorn', 'Apples']
  }

// Array of Objects Example
// Let's look at Mike's favorite collection of donut
var glazedDonuts = [
    {
      frosting: 'glazed',
      style: 'cake',
      type: 'old fashioned',
      age: '45',
      time: 'minutes'
    },
    {
      frosting: 'glazed',
      style: 'yeast raised',
      type: 'regular',
      age: '5',
      time: 'minutes'
    },
    {
      frosting: 'glazed',
      style: 'yeast raised',
      type: 'jelly filled',
      age: '1',
      time: 'seconds'
    }
  ];
// You could then go to the donut owner and ask something like: 
// Can I buy the 1st donut on the rack if it has been out of the oven for fewer than 25 minutes? 
// The code conversation for that would be
var purchase;
//You
if((glazedDonuts[0].age < 25 && glazedDonuts[0].time == 'minutes') || glazedDonuts[0].time == 'seconds'){
  //shop owner
  purchase = glazedDonuts[0];
}
else {
  console.log('sorry it has been out a bit longer');
}  
// As you can note, we are accessing an Array of glazedDonuts where each index represents an object. 
// That object we accessed has keys we can print off and take a look at the details of.

// Let's say Mike decided to break open the bank and purchase as many donuts as he can. 
// Let's loop through all of the available donuts and see how many Mike can buy.
var numPurchase = 0;
for (var donut in glazedDonuts){
  console.log(glazedDonuts[donut].type);
  if((glazedDonuts[donut].age < 25 && glazedDonuts[donut].time == 'minutes') || glazedDonuts[donut].time == 'seconds'){
    numPurchase++;
  }
  else {
    console.log('not this donut...');
   }
}
console.log(numPurchase);
// Looks like Mike can buy 2 donuts!

// The Document Object Model //
// the Document Object Model (DOM) – a representation of the entire web page as objects. 
// We can manipulate these objects with JavaScript
// You can think of the document as a big container, inside of which sits information (properties) and instructions (methods). 
// You can access these objects – for example, the body – by calling document.bodyin the console. 
// In other instances, fetching the object requires you to use a built-in method such as getElementsByTagName ( e.g. document.getElementsByTagName('div')). 
// This will return an array of DOM elements.
console.log(document.body);
var body = document.body;
// this is more fun if it's a random page with stuff already on it (like the learning platform for example).
body.innerHTML = "Hello World";
var bod = document.body;
for (var i = 0; i < 10; i ++){
  bod.innerHTML += "<p>This has gone through the loop completely: " +i+ " times</p>";
}
// Lastly, these DOM elements can listen for events. After we’ve placed all the p-tags into the body (using the above loop), let’s put an event listener on them! 
var paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
for (var i = 0; i < paragraphs.length; i ++){
  console.log(paragraphs[i].addEventListener);
  paragraphs[i].addEventListener('click', function(){
    this.style.background='blue';
  });
}
// Now click on the text in the <p> tags to see the listener change the color. It's listening for your mouse-click
// This is exactly where front-end frameworks or libraries come in handy. 
// By layering some functionality atop regular JavaScript, the DOM becomes much easier to manipulate. 
// That means faster development and, hopefully, a better end product. 
// In the MEAN stack, we'll learn about one of these: Angular. But before that, let's play with jQuery.