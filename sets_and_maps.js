/**
 * Let's do two very important data structures in JavaScript.
 */

const { log } = require("console");

// Set a = new HashSet<>();

const alphabets = new Set('abcdefghijkl'.split(''));
console.log(alphabets);

alphabets.add('m');
alphabets.add('b');

if (!alphabets.has('n'))
{
    alphabets.add('n');
}

console.log(alphabets.size);

alphabets.forEach((value, value2, set) =>
{
    console.log(value, value2);
})

console.log(alphabets[2]);// undefined

alphabets.delete('b');
console.log(alphabets);

/** Now let's do Maps */

// int[] num = new int[5];
// List<Integer> l = new ArrayList<String>();

const arr = new Array(1, 2, 3, 1, 4, 5, 5, 1);

/* Calculate and output the frequency of each elment in the array */

/** First step - Create a map with key as the element value and then let's keep a counter as a value
 * Iterate through the array and populate the map
 * Once we have looped through the array, print the key->value from the map.
 */

const m = new Map();

for (const num of arr)
{
    m.set(num, (m.get(num) || 0) + 1);
}

// arr.forEach((value, index) =>
// {
//     if (m.get(value) === undefined)
//     {
//         m.set(value, 1);
//     } else
//     {
//         m.set(value, m.get(value) + 1);
//     }
// });

m.forEach((value, key) => console.log(`Element : ${key} and the count is: ${value}`));

const buckets = [];

m.forEach((freq, num) =>
{
    // buckets[freq] ? buckets[freq].push(num) : buckets[freq] = [];
    // console.log(buckets[freq]);
    if (typeof buckets[freq] === "undefined")
    {
        // console.log("undefined", buckets, buckets.length);
        console.log("Undefined for : " + freq);
        buckets[freq] = [];
    }

    buckets[freq].push(num);
    console.log("Pushed " + buckets[freq]);
})

console.log(buckets);

const k = 2;

const results = [];

for (let i = buckets.length - 1; i >= 0 && results.length < k; i--)
{
    console.log("Considering: " + buckets[i]);
    results.push(...buckets[i]);
}

console.log(results);
