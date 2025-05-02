function areValuesEqual(a, b) {
    return a === b;
  }
  
  // When ready, use code below for testing
  
  console.log(areValuesEqual(5, "5"));              // false (different types)
  console.log(areValuesEqual(5, 5));                // true (same value and type)
  console.log(areValuesEqual([1, 2], [1, 2]));       // false (different array references)
  const obj = { x: 1 };
  console.log(areValuesEqual(obj, obj));            // true (same reference)
  console.log(areValuesEqual(null, undefined));     // false (different types)
  