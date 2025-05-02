const counter = {
    value: 0,
  
    increment(prefix = false, step = 1) {
      if (prefix) {
        this.value += step;
        return this.value;
      } else {
        const temp = this.value;
        this.value += step;
        return temp;
      }
    },
  
    decrement(prefix = false, step = 1) {
      if (prefix) {
        this.value -= step;
        return this.value;
      } else {
        const temp = this.value;
        this.value -= step;
        return temp;
      }
    }
  };

  // Standard usage (step = 1)
console.log(counter.increment());        // 0 (postfix)
console.log(counter.value);              // 1
console.log(counter.increment(true));    // 2 (prefix)
console.log(counter.value);              // 2
console.log(counter.decrement());        // 2 (postfix)
console.log(counter.value);              // 1
console.log(counter.decrement(true));    // 0 (prefix)
console.log(counter.value);              // 0

// Custom step values
console.log(counter.increment(true, 5)); // 5
console.log(counter.value);              // 5
console.log(counter.decrement(false, 3)); // 5 (postfix)
console.log(counter.value);              // 2
