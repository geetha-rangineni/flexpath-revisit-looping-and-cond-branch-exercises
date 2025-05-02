function getShippingCost(weight) {
    let category;
  
    if (weight <= 1) {
      category = 1;
    } else if (weight <= 5) {
      category = 2;
    } else if (weight <= 10) {
      category = 3;
    } else {
      category = 4;
    }
  
    let cost;
    switch (category) {
      case 1:
        cost = 5;
        break;
      case 2:
        cost = 10;
        break;
      case 3:
        cost = 15;
        break;
      case 4:
        cost = 20;
        break;
      default:
        cost = -1; // Invalid category
    }
  
    return cost;
  }
  
  // Testing
  console.log(getShippingCost(0.5)); // 5
  console.log(getShippingCost(3));   // 10
  console.log(getShippingCost(7));   // 15
  console.log(getShippingCost(12));  // 20
  