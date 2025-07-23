const t1 = performance.now();
// method 1
const t2 = performance.now();
// method 2
const t3 = performance.now();

console.log(`Method 1: ${(t2 - t1).toFixed(3)} ms`);
console.log(`Method 2: ${(t3 - t2).toFixed(3)} ms`);
