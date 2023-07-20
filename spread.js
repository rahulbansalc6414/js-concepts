console.log(
    "I am writing a program to illustate the usage of the spread operator"
);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2];

function sum(num1, num2, num3)
{
    console.log(num1, num2, num3);
    return num1 + num2 + num3;
}

// There was no error. The system only took the first three params
console.log(sum(...arr1));
console.log(sum(...arr2)); // Nan
console.log(sum(5, ...arr2));

// ------------------

let arr3 = ['a', ...arr1, 'b'];

arr3[2] = 'x';
console.log(arr3, arr1);

console.log(avg(1, 2));
console.log(avg(1, 2, 3, 4, 5));


function avg(...num)
{
    let sum = 0;

    for (let index = 0; index < num.length; index++)
    {
        sum += num[index];
    }

    return sum / num.length;
}