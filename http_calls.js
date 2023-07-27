const axios = require('axios');
const { myFunction, sortByFrequency } = require("./my_file");

// Replace the URL with the API endpoint you want to fetch data from
const apiUrl = 'https://public.fyers.in/fe_interview_data/city.json';

// Function to fetch data using Axios
const fetchData = async () =>
{
    try
    {
        const response = await axios.get(apiUrl);

        // Assuming the response data is an array of objects
        const dataArray = response.data;

        // Iterate over the array and log each object
        dataArray.forEach(item =>
        {
            console.log(item);
        });

        return dataArray;
    } catch (error)
    {
        console.error('Error fetching data:', error.message);
    }
};

// Call the fetchData function
(async () =>
{
    const res = await fetchData();

    const m = new Map();

    for (let x of res)
    {
        console.log(x.keyword);
        m.set(x.keyword, m.get(x.keyword) + 1 || 1);
    }

    const no_of_results = 2;
    const results = sortByFrequency(m, no_of_results);
    console.log(results);
})();

myFunction();
