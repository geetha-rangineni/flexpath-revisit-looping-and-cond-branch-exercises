class CircularCounter {
    constructor(max) {
      this.value = 0;
      this.max = max;
    }
  
    increment(prefix = false) {
      const nextValue = (this.value + 1) % (this.max + 1);
      if (prefix) {
        this.value = nextValue;
        return this.value;
      } else {
        const temp = this.value;
        this.value = nextValue;
        return temp;
      }
    }
  
    decrement(prefix = false) {
      const prevValue = (this.value - 1 + (this.max + 1)) % (this.max + 1);
      if (prefix) {
        this.value = prevValue;
        return this.value;
      } else {
        const temp = this.value;
        this.value = prevValue;
        return temp;
      }
    }
  }
  
  // ✅ Testing
  const counter = new CircularCounter(3);
  
  console.log(counter.increment());      // 0 → value becomes 1
  console.log(counter.increment(true));  // value becomes 2 → returns 2
  console.log(counter.increment());      // 2 → value becomes 3
  console.log(counter.increment());      // 3 → value becomes 0
  console.log(counter.decrement(true));  // value becomes 3 → returns 3
  console.log(counter.decrement());      // 3 → value becomes 2
  

  