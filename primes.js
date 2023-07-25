/**
 * def primes(n):

    primes = []

    for PossiblePrime in range(2, n):

        isPrime = True

        for num in range(2, PossiblePrime):

            if PossiblePrime % num == 0:

                isPrime = False

        if isPrime:

            primes.append(PossiblePrime)

    return primes

 

n = '100'

print(primes(n))
 */

function getPrimes(n)
{
    const result = [];

    for (let i = 2; i <= n; i++)
    {
        let isPrime = checkPrime(i);
        if (isPrime) result.push(i);
    }

    return result;
}

function checkPrime(n)
{
    for (let i = 2; i <= n * 0.5; i++)
    {
        if (n % i == 0) return false;
    }
    return true;
}

console.log(getPrimes(55));