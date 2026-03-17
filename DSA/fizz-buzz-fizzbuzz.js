Question for today
// FizzBuzz from 1 to 100
// Output:

// Multiples of 3 → "Fizz"
// Multiples of 5 → "Buzz"
// Multiples of both → "FizzBuzz"


let output = '';

for (let i= 1; i<=100;  i++){
    if(i % 3 === 0){
        output += i + 'Fizz';
    }
    else if (i % 5 === 0){
        output += i + 'Buzz';
    }
    else if (i % 3 === 0 && i % 5 === 0){
        output += i + 'Fizzbuzz';
    }
}

console.log(output);