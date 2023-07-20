const { log } = require("console");

let play = [1, 2, 3, 4, 5];

// int[] pplay = [];

let result = play.map((value, index, array) =>
{
    console.log(value, index, array);
    return value * value;
})

console.log(result, play);

let sum = play.reduce((prev, current, index, array) =>
{
    //console.log(prev, current, index, array);
    return prev + current;
})

console.log(sum);

filtered = play.filter((value) => value % 2 === 0 ? true : false)

let newArr = [];

for (let index = 0; index < play.length; index++)
{
    const element = play[index];
    if (element % 2 === 0)
    {
        newArr.push(element);
    }
}

console.log(filtered);
console.log(newArr);

