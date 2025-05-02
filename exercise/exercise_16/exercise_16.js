function validateInput(user) {
    const isRegisteredUser =
      typeof user.username === "string" &&
      user.username.trim() !== "" &&
      typeof user.password === "string" &&
      user.password.trim() !== "" &&
      typeof user.email === "string" &&
      user.email.includes("@");
  
    const isGuestUser = user.isGuest === true;
  
    return isRegisteredUser || isGuestUser;
  }
  
  // Testing
  const user1 = {
    username: "john",
    password: "secret",
    email: "john@example.com",
  };
  
  const user2 = {
    username: "jane",
    password: "pass",
    email: "invalidemail",
  };
  
  const user3 = {
    isGuest: true,
  };
  
  console.log(validateInput(user1)); // true
  console.log(validateInput(user2)); // false
  console.log(validateInput(user3)); // true
  