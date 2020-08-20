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