const prompt = require("prompt-sync")()

let Num_for_Length = parseInt(prompt("Enter the number of prime numbers you want: "))
let Start_Prime_Num = parseInt(prompt("Enter the starting number for prime number iteration: "))

if (!isNaN(Num_for_Length) && Num_for_Length > 0) 
{
    const Arr_Prime_Num = []

    while (Arr_Prime_Num.length < Num_for_Length) 
    {
        if (isPrime(Start_Prime_Num)) 
        {
            Arr_Prime_Num.push(Start_Prime_Num)
        }
        Start_Prime_Num++
    }

    console.log("Prime Numbers:", Arr_Prime_Num)
    return
} 
console.log("You did not enter a valid positive number for the number of prime numbers.")


function isPrime(num) 
{
    if (num <= 1) 
    {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) 
    {
        if (num % i === 0) 
        {
            return false
        }
    }
    return true
}