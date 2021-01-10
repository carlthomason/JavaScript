var users = [
        {
            name: "Michael",
            age: 37
        },
        {
            name: "John",
            age: 30
        },
        {
            name: "David",
            age: 27
        }
    ];

Michael - 37
John - 30
David - 27

// 1. How would you print/log John's age?
var John = users.find(function(obj) {
    return obj.name == "John";
})
console.log(john.age);

// 2. How would you print/log the name of the first project?
console.log(users[0].name);

// How would you print/log the name and age of each user using a for loop?
for (var i = 0; i < users.length; i++){
    console.log(users[i].name + " - " + users[i].age);
}