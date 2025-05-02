function calculateDiscount(membershipLevel, purchaseAmount) {
    return membershipLevel === 'gold' ? 20 :
           membershipLevel === 'silver' ? 15 :
           membershipLevel === 'bronze' ? 10 :
           membershipLevel === 'none' ? 0 :
           0; // default case if the input doesn't match any level
  }
  

  //Testing
 console.log(calculateDiscount('gold', 100));   // 20
console.log(calculateDiscount('silver', 100)); // 15
console.log(calculateDiscount('bronze', 100)); // 10
console.log(calculateDiscount('none', 100));   // 0
console.log(calculateDiscount('platinum', 100)); // 0 (unknown membership)

/* 
  Nested ternary operators are a compact way to handle multiple conditions in a single line. Each condition checks a value and returns a result if true; otherwise, it moves to the next condition.
In the calculateDiscount function, the membership level determines the discount percentage:
'gold' → 20%
'silver' → 15%
'bronze' → 10%
'none' → 0%
The use of nested ternary operators makes the function concise, but:
Readability can suffer when too many levels are nested.
It’s best used when conditions are simple and the number of options is limited.  */
