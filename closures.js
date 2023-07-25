const { log } = require("console");

var addSix = createBase(6);

console.log(addSix(10));
console.log(addSix(21));
// addSix(10); // returns 16
// addSix(21); // returns 27

function createBase(base)
{
    return function (number)
    {
        return number + base; // The inner func has access to the variable declared in the outer function.
    }
}


function likeTheVideo()
{
    // log("Do something");
    let _called = 0;

    return function ()
    {
        if (_called > 0)
        {
            console.log("Already called. I will not do anything now.");
        }
        else
        {
            _called++;
            console.log("Do something");
        }
    }
}

const newFunc = likeTheVideo();
newFunc();
newFunc();
newFunc();

// likeTheVideo();
// likeTheVideo();
// likeTheVideo();

console.log("-----------");

function a(params)
{
    for (var i = 0; i < 3; i++)
    {
        setTimeout(() =>
        {
            console.log(i);
        }, 1000);
    }

    for (let x = 0; x < 3; x++)
    {
        setTimeout(() =>
        {
            console.log(x);
        }, 1000);
    }
}

a();