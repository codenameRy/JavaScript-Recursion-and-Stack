//Example

// pow(x, n)
// pow(2, 2) = 4
// pow(2, 3) = 8
// pow(2, 4) = 16

//Iterative approach with for loop
function pow(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert( pow(2, 3) ); // 8

//Recrusive approach #1
function pow2(x, n) {
  if (x === 1) {
    return x
  } else {
    return x * pow(x, n-1)
  }
}

alert( pow2(2, 4) ); // 8

//Recusion Approach #2
function pow3(x, n) {
  return (x === 1) ? x : (x * (pow(x, n-1)))
}

alert( pow3(2, 2) ); // 8

//Challenge 1 - Sum all numbers till the given one

// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

//Solution 1 - Using a for loop.


function sumTo( n) 
{ 
    var result = 0; // initialize result 
    // One by one compute sum of digits in every number from 
    // 1 to n 
    for (var i = 1; i <= n; i++) 
        result += i; 
  
    return result; 
} 

alert( sumTo(100) ); // 5050

//Solution 2 - Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.

function sumTo2(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

alert( sumTo2(100) );

//Solution 3 - Using the arithmetic progression formula.

function sumTo3(n) {
  return n * (n + 1) / 2;
}

alert( sumTo3(100) );

//Challenge 2 - Calculate factorial
// The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

// We can write a definition of factorial like this:
// n! = n * (n - 1) * (n - 2) * ...*1

//Solution 1 - Recusion with basis of 1
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(5) ); // 120

//Solution 2 - Recursion with basis of 2
function factorial2(n) {
  return n ? n * factorial(n - 1) : 1;
}

alert( factorial2(5) ); // 120