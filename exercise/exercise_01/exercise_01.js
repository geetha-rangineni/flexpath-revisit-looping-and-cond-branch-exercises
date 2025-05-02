function validateUser(user) {
    // Check if age is at least 18
    if (user.age < 18) {
      return false;
    }
  
    // Check if user is banned
    if (user.banned === true) {
      return false;
    }
  
    // Check if user is admin or has valid subscription type
    if (user.isAdmin || user.subscriptionType === 'pro' || user.subscriptionType === 'enterprise') {
      return true;
    } else {
      return false;
    }
  }
  
  //Testing

  const user1 = { age: 25, isAdmin: false, subscriptionType: 'pro' };
  console.log(validateUser(user1)); // true
  
  const user2 = { age: 17, isAdmin: true, subscriptionType: 'enterprise' };
  console.log(validateUser(user2)); // false
  
  const user3 = { age: 30, isAdmin: false, subscriptionType: 'basic', banned: true };
  console.log(validateUser(user3)); // false


  /*  Explanation:
  if-else statements for readability and control flow,
logical operators (||) to check multiple valid conditions, and
strict equality (===) and inequality (!==) to ensure values match exactly. */

  