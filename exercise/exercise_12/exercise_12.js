// Addition using increment/decrement
function add(a, b) {
    while (b > 0) {
      a++;
      b--;
    }
    while (b < 0) {
      a--;
      b++;
    }
    return a;
  }
  
  // Subtraction using addition
  function subtract(a, b) {
    return add(a, -b);
  }
  
  // Multiplication using repeated addition
  function multiply(a, b) {
    let result = 0;
    const positive = b > 0;
    b = Math.abs(b);
    for (let i = 0; i < b; i++) {
      result = add(result, a);
    }
    return positive ? result : -result;
  }
  
  // Division using repeated subtraction
  function divide(a, b) {
    if (b === 0) throw new Error("Division by zero");
  
    let quotient = 0;
    const positive = (a >= 0) === (b >= 0);
  
    a = Math.abs(a);
    b = Math.abs(b);
  
    while (a >= b) {
      a = subtract(a, b);
      quotient++;
    }
  
    return positive ? quotient : -quotient;
  }
  
  // Modulus using repeated subtraction
  function mod(a, b) {
    if (b === 0) throw new Error("Division by zero");
  
    const positive = a >= 0;
    a = Math.abs(a);
    b = Math.abs(b);
  
    while (a >= b) {
      a = subtract(a, b);
    }
  
    return positive ? a : -a;
  }
  
  // Exponentiation using repeated multiplication
  function power(a, b) {
    if (b === 0) return 1;
    if (b < 0) throw new Error("Negative exponents not supported");
  
    let result = a;
    for (let i = 1; i < b; i++) {
      result = multiply(result, a);
    }
    return result;
  }
  
  
  console.log(add(5, 3));        // 8
  console.log(subtract(5, 3));   // 2
  console.log(multiply(5, -3));  // -15
  console.log(divide(10, 2));    // 5
  console.log(mod(10, 3));       // 1
  console.log(power(2, 3));      // 8
  