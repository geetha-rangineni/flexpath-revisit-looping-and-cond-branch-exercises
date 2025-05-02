function countFalsyValues(arr) {
    let count = 0;
  
    for (const val of arr) {
      // Convert to boolean and check for falsy
      if (!val) {
        count++;
      }
    }
  
    return count;
  }

  const testArray = [
    0,             // falsy
    1,             // truthy
    "",            // falsy
    "hello",       // truthy
    null,          // falsy
    undefined,     // falsy
    NaN,           // falsy
    false,         // falsy
    true,          // truthy
    [],            // truthy (empty array is truthy)
    {},            // truthy (empty object is truthy)
  ];
  
  console.log(countFalsyValues(testArray)); // Outputs: 6
  