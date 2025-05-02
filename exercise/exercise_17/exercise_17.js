const original = {
    name: "Alice",
    preferences: {
      theme: "dark",
      language: "en",
    },
  };
  
  // ✅ Shallow copy using spread operator
  const shallowCopy = { ...original };
  
  // Modifying a nested property in shallow copy
  shallowCopy.preferences.theme = "light";
  
  // Affects original due to shared reference in nested object
  console.log("Original theme (after shallow copy modification):", original.preferences.theme); // 'light'
  
  // ✅ Deep copy using JSON methods
  const deepCopy = JSON.parse(JSON.stringify(original));
  
  // Modifying a nested property in deep copy
  deepCopy.preferences.language = "es";
  
  // Does NOT affect the original
  console.log("Original language (after deep copy modification):", original.preferences.language); // 'en'
  console.log("Deep copy language:", deepCopy.preferences.language); // 'es'
  