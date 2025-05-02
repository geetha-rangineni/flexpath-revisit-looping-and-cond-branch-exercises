function filterAndTransform(numbers) {
    const result = [];
  
    for (const num of numbers) {
      if (num < 0) continue; // Skip negative numbers
  
      if (num % 2 === 0) {
        result.push(num ** 2); // Square even numbers
      } else {
        result.push(num + 1); // Increment odd numbers
      }
    }
  
    return result;
  }

  
const nums = [-3, -2, 0, 1, 2, 3, 4];
console.log(filterAndTransform(nums)); // [0, 2, 4, 4, 16]
