console.log("Let's understand the destructing concept");

// Let's create a object

const obj1 = {
    name1: "Rahul",
    age: 26
}

let { name1 } = obj1;

console.log(name1);

name1 = "Ram";

console.log(name1, obj1);