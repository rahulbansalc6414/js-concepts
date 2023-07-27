const obj1 = {
    company: "ABC Corp.",
    openedOn: "1985",
    departments: [],
    employees: [
        { n: "Ajay", age: 22, department: "engineering" },
        { n: "Gwen", age: 22, department: "design" },
        { n: "Ram", age: 24, department: "product", joinedOn: new Date("1985") }
    ]
}

for (let prop in obj1)
{
    console.log("Prop is : " + prop);
}

console.log(obj1.employees);
console.log("--", Object.values(obj1));
console.log("--", JSON.stringify(obj1));