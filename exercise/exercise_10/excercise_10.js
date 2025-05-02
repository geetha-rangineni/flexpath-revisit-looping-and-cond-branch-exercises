// Example of a closure that retains a large object in memory
function createHeavyClosure() {
    const largeArray = new Array(1e6).fill("*"); // 1 million entries
    return function () {
      return largeArray.length;
    };
  }
  
  let closureFunc = createHeavyClosure();
  
  console.log(closureFunc()); // Outputs: 1000000
  
  // At this point, largeArray is still in memory because closureFunc uses it
  
  // To allow garbage collection of largeArray:
  closureFunc = null; // Remove reference to the closure
  
  // Now largeArray can be garbage collected
  