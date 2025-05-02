// Function using explicit loop to return the first truthy value
function coalesce(...args) {
    for (let arg of args) {
      if (arg) {
        return arg;
      }
    }
    // If all values are falsy, return the last one (even if falsy)
    return args[args.length - 1];
  }
  
  // Function using logical OR (||) operator to return first truthy value
  function coalesceAlternative(...args) {
    return args.reduce((acc, val) => acc || val);
  }
  
  // Testing
  console.log(coalesce(null, undefined, "", 0, "Hello", "World")); 
  // Outputs: "Hello" — first truthy value
  
  console.log(coalesceAlternative(false, NaN, 0, "", "First Truthy")); 
  // Outputs: "First Truthy"
  
  // Edge case: all falsy values
  console.log(coalesce(false, null, undefined, 0)); 
  // Outputs: 0 (last argument, all are falsy)
  
  console.log(coalesceAlternative(false, null, undefined, 0)); 
  // Outputs: 0
  