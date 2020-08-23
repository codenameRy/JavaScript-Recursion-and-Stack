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

//Challenge 3 - Fibonacci numbers


//Solution 1 - Iterative with basis of 0
function fib(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 return arr[n]
}

//Solution 2 - Recursion
// function fib(n) { 
//   if (n < 2 ) {
//     return n
//   } else {
//     return fib(n-1) + fib(n-2)
//   }
// }

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757

//Solution 3 - Iterative with basis of 1

function fib2(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert(fib2(3)); // 2
alert(fib2(7)); // 13
alert(fib2(77)); // 5527939700884757

//Challenge 4 - Output a single-linked list
// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

//Solution 1 - Loop based solution

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }

}

printList(list);

//Solution 2 - Recursion
let list2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList2(list2) {

  alert(list2.value); // output the current item

  if (list2.next) {
    printList2(list2.next); // do the same for the rest of the list
  }

}

printList2(list);

//Challenge 5 - Output a single-linked list in the reverse order

//Solution 1 - Recursion
let listReverse = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(listReverse) {

  if (listReverse.next) {
    printReverseList(listReverse.next);
  }

  alert(listReverse.value);
}

printReverseList(listReverse);

//Solution 2 - Iterative loop

let list4 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList2(list4) {
  let arr = [];
  let tmp = list4;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}

printReverseList2(list4);