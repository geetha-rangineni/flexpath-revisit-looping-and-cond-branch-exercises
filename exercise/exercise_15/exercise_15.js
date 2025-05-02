function evaluateOperation(a, b, operator) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b === 0) throw new Error("Division by zero");
        return a / b;
      case "%":
        if (b === 0) throw new Error("Division by zero");
        return a % b;
      case "^":
        return a ** b;
      default:
        throw new Error(`Invalid operator: ${operator}`);
    }
  }
  
  // Testing
  console.log(evaluateOperation(5, 3, "+")); // 8
  console.log(evaluateOperation(5, 3, "-")); // 2
  console.log(evaluateOperation(5, 3, "*")); // 15
  console.log(evaluateOperation(5, 3, "/")); // 1.666...
  console.log(evaluateOperation(5, 3, "%")); // 2
  console.log(evaluateOperation(5, 3, "^")); // 125
  
  try {
    console.log(evaluateOperation(5, 0, "/")); // Throws error
  } catch (err) {
    console.error(err.message); // Division by zero
  }
  
  try {
    console.log(evaluateOperation(5, 3, "&")); // Throws error
  } catch (err) {
    console.error(err.message); // Invalid operator
  }
  