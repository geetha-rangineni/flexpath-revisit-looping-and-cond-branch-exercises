function invertBooleanProperties(obj) {
    for (const key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
  
      const value = obj[key];
  
      if (typeof value === "boolean") {
        obj[key] = !value;
      } else if (value && typeof value === "object" && !Array.isArray(value)) {
        invertBooleanProperties(value); // Recurse into nested objects
      }
    }
  }

  
  const settings = {
    darkMode: true,
    notifications: false,
    preferences: {
      autoSave: true,
      sync: false,
    },
  };
  
  invertBooleanProperties(settings);
  console.log(settings);
  
  // Output:
  // {
  //   darkMode: false,
  //   notifications: true,
  //   preferences: { autoSave: false, sync: true }
  // }
  