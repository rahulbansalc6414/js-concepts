// Define your function
const myFunction = () =>
{
    console.log('This is my custom function!');
};

const sortByFrequency = (mapOfValueToFreq, no_of_results) =>
{
    const buckets = [];

    for (const num of mapOfValueToFreq.keys())
    {
        const freq = mapOfValueToFreq.get(num);

        if (typeof buckets[freq] === "undefined")
        {
            buckets[freq] = [];
        }

        buckets[freq].push(num);
        // console.log("Pushed " + buckets[freq]);
    }

    console.log(buckets);

    const results = [];

    for (let i = buckets.length - 1; i >= 0 && results.length < no_of_results; i--)
    {
        console.log("Considering: " + buckets[i] + " with frequency of " + i);
        results.push(...buckets[i]);
    }

    return results;
}

// Export the function so that it can be used in other files
module.exports = { myFunction, sortByFrequency };
