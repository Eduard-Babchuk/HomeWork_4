# HomeWork_4

## Програма для внесення простих чисел в масив, довжину якого визначає користувач та число з якого починається відлік також вводить користувач.

### ___Введення даних користувачем___
Введення даних в термінал можна реалізувати за допомогою інтерфейсу:
```JavaScript
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Введіть довжину масиву: ", (userInput) => {

  // Подальший код

  rl.close()
})
```
або за допомогою методу _prompt_. Для початку потрібно інсталювати його:

![](https://github.com/Eduard-Babchuk/HomeWork_4/blob/main/Photo/1.png)

Ми отримали можливість використовувати _prompt_ в терміналі:
```JavaScript
const prompt = require("prompt-sync")()

let Num_for_Length = parseInt(prompt("Enter the number of prime numbers you want: "))
let Start_Prime_Num = parseInt(prompt("Enter the starting number for prime number iteration: "))
```
### ___Взначення простого числа___
Створюємо функцію яка буде перевіряти чи є число простим
```JavaScript
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
```
### ___Перевірка чи коректно введена довжина масиву___
```JavaScript
if (!isNaN(Num_for_Length) && Num_for_Length > 0) 
{
     // Подальший код
} 
console.log("You did not enter a valid positive number for the number of prime numbers.")
```
Перевіряємо чи ввели число __!isNaN(Num_for_Length)__ і чи воно не дорівнює нулю __Num_for_Length > 0__

### ___Заповнення масиву простими числами___
```JavaScript
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
```
### ___Результат:___

![](https://github.com/Eduard-Babchuk/HomeWork_4/blob/main/Photo/2.png)

_Дякую! Щиро ваш, Бабчук Едуард (ІПЗс-23-1)_
