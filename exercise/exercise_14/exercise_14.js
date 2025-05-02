function deepFreeze(obj) {
    // Freeze the top-level object
    Object.freeze(obj);
  
    // Recursively freeze properties that are objects or functions
    for (const key in obj) {
      if (
        Object.hasOwn(obj, key) &&
        obj[key] !== null &&
        (typeof obj[key] === "object" || typeof obj[key] === "function") &&
        !Object.isFrozen(obj[key])
      ) {
        deepFreeze(obj[key]);
      }
    }
  }
  
  // Sample object with nested structures
  const dataStore = {
    number: 42,
    text: "Hello",
    array: [1, 2, 3],
    nested: {
      a: 1,
      b: [2, 3],
      c: { d: 4 },
    },
  };
  
  // Freeze the object deeply
  deepFreeze(dataStore);
  
  // Attempting modifications (will fail or throw in strict mode)
  dataStore.number = 100;           // Fails silently
  dataStore.array.push(4);          // Throws TypeError in strict mode
  dataStore.nested.c.d = 5;         // Throws TypeError in strict mode
  dataStore.newProp = "New Value";  // Fails silently
  
  // Output result
  console.log(dataStore);
  // Original structure remains unchanged
  