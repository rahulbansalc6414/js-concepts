const employees = ['Ajay', 'Rahul', 'Kalash'];

employees.push('Gem');

console.log(employees);

let i = 1;

while (i <= 3)
{
    employees.push("My " + i);
    i++;
}

console.log(employees);

employees.pop();
employees.pop();

console.log(employees);


console.log(employees.join("||"));

/**
 * Let's sort this array
 */

employees.sort().reverse();

console.log(employees);