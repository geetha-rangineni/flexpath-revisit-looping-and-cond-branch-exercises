function funcA() {
    console.log("funcA called");
    return false;
  }
  
  function funcB() {
    console.log("funcB called");
    return true;
  }
  
  function funcC() {
    console.log("funcC called");
    return false;
  }
  
  // Test 1: funcA = false, funcB = true, funcC = false → should return true
  console.log("Result:", evaluateExpression(funcA, funcB, funcC)); 
  // Output: funcA called → funcB called → funcC called → Result: true
  
  // Test 2: funcA = true → should short-circuit, funcB and funcC not called
  console.log("\n--- New Test ---");
  function funcA2() {
    console.log("funcA2 called");
    return true;
  }
  
  console.log("Result:", evaluateExpression(funcA2, funcB, funcC));
  // Output: funcA2 called → Result: true (funcB and funcC not called)
  