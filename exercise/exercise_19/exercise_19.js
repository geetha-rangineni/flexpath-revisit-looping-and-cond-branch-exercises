function normalizeInput(value) {
    if (value === null || value === undefined) {
      throw new Error("Value cannot be null or undefined");
    }
    return value ? value : "N/A";
  }
  
  // Testing
  console.log(normalizeInput("Hello")); // Outputs: 'Hello'
  console.log(normalizeInput(0));       // Outputs: 'N/A'
  console.log(normalizeInput(""));      // Outputs: 'N/A'
  
  try {
    console.log(normalizeInput(null));  // Throws error
  } catch (e) {
    console.error(e.message);          // Outputs: 'Value cannot be null or undefined'
  }
  
  try {
    console.log(normalizeInput(undefined)); // Throws error
  } catch (e) {
    console.error(e.message);              // Outputs: 'Value cannot be null or undefined'
  }
  